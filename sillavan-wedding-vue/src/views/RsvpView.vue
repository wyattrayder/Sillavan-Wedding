<template>
  <div class="outerContainer">
    <v-toolbar>
      <div class="headingContainer">
        <h1 style="margin: 10px">RSVP</h1>
      </div>
    </v-toolbar>

    <v-progress-linear
      color="light-green darken-4"
      height="10"
      :value="this.rsvpProgress"
      striped
       
    ></v-progress-linear>

    <!-- Find Party -->
    <div class="innerContainer">
      <div class="rsvpDiv" v-if="this.searchPage">
        <p>
          If you're responding for you and a guest (or your family), you'll be
          able to RSVP for your entire group.
        </p>

        <v-row>
          <v-col></v-col>
          <v-col cols="6"
            ><v-text-field label="Name" v-model="name"></v-text-field
          ></v-col>
          <v-col></v-col>
        </v-row>
        <v-row>
          <v-col></v-col>
          <v-col cols="6"
            ><v-btn @click="findGuest" style="width: 100%"
              >Find Invitation</v-btn
            ></v-col
          >
          <v-col></v-col>
        </v-row>
      </div>
    </div>

    <!-- Verify Party -->
    <div class="guestList centerText" v-if="this.partyFoundPage">
      <h2>Your party has been found!</h2>
      <h3>Please check the members of your party who will be attending</h3>

      <table class="partyTable desk">
        <tr>
          <th>Name</th>
          <th>Attending?</th>
        </tr>
        <tr v-for="person in party" :key="person.name">
          <td>
            {{ person.name }}
          </td>
          <td class="centerFlex">
            <v-checkbox color="emerald" v-model="person.isAttending"></v-checkbox>
          </td>
        </tr>
      </table>

      <v-row v-for="person in party" :key="person.name" class="mobile">
        <v-col cols="12">
          <v-row>
            <v-col> {{ person.name }}</v-col>
            <v-col
              ><v-checkbox color="emerald" v-model="person.isAttending"></v-checkbox
            ></v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-btn @click="goToNotePage" class="nextBtn">Next</v-btn>
    </div>

    <!-- Notes to Bride and Groom Page -->
    <div class="notePage centerText" v-if="this.notePage">
      <h2>Leave a note to the bride and groom!</h2>
      <v-row style="margin-top: 35px;">
        <v-col></v-col>
        <v-col cols="8">
      <v-textarea solo v-model="note"></v-textarea></v-col>
      <v-col></v-col>
      </v-row>
      <v-btn @click="back">Back</v-btn>
      <v-btn @click="goToSongPage">Next</v-btn>
    </div>

    <!-- Song requests! -->
    <div class="songPage centerText" v-if="this.songPage">
      <h2>Feel free to leave a song request!</h2>
      <v-row style="margin-top: 35px;">
        <v-col></v-col>
        <v-col cols="8">
      <v-textarea solo v-model="songRequest"></v-textarea></v-col>
      <v-col></v-col>
      </v-row>
      <v-btn @click="back">Back</v-btn>
      <v-btn @click="goToEndPage">Submit</v-btn>
    </div>

    <!-- End page -->
    <div class="endPage centerText" v-if="this.endPage">
      <h2>You have successfully RSVP'd!</h2>
      <h3>See you on May 27th!</h3>
    </div>

    <!-- Already RSVP'd page -->
    <div class="alreadyPage centerText" v-if="this.alreadyRSVPPage">
      <h2>You have already RSVP'd! See the results below.</h2>
      <table class="partyTable desk">
        <tr>
          <th>Name</th>
          <th>Attending?</th>
        </tr>
        <tr v-for="person in party" :key="person.name">
          <td>
            {{ person.name }}
          </td>
          <td class="centerFlex">
            <v-checkbox color="emerald" v-model="person.isAttending" disabled></v-checkbox>
          </td>
        </tr>
      </table>

      <v-row v-for="person in party" :key="person.name" class="mobile">
        <v-col cols="12">
          <v-row>
            <v-col> {{ person.name }}</v-col>
            <v-col
              ><v-checkbox color="emerald" v-model="person.isAttending" disabled></v-checkbox
            ></v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <v-snackbar v-model="snackbar" color="red"
      >Name not found in the guest list</v-snackbar
    >
  </div>
</template>

<script>
import firestoreApi from "../firestore.api";
// import NavAndHeader from '@/components/navAndHeader.vue';

export default {
  // components: { NavAndHeader },

  data: () => ({
    name: "",
    party: {},
    partyDBObject: {},
    note: "",
    songRequest: "",

    searchPage: true,
    partyFoundPage: false,
    notePage: false,
    songPage: false,
    endPage: false,
    alreadyRSVPPage: false,

    snackbar: false,

    rsvpProgress: 10,
  }),

  methods: {
    async findGuest() {
      this.partyDBObject = await firestoreApi.findParty(this.name);

      if (this.partyDBObject) {
        if (this.partyDBObject.rsvpStatus == false) {
          this.party = this.partyDBObject.party;
          this.searchPage = false;
          this.partyFoundPage = true;
          this.rsvpProgress += 30;
        } else if (this.partyDBObject.rsvpStatus == true) {
          this.party = this.partyDBObject.party;
          this.searchPage = false;
          this.alreadyRSVPPage = true;
          this.rsvpProgress += 90;
        }
      } else {
        this.partyFoundPage = false;
        this.snackbar = true;
      }
      // alert("This feature has not been set up yet :)")
    },
    async rsvpParty() {
      let docID = this.partyDBObject.docID;

      this.partyDBObject.party = JSON.parse(JSON.stringify(this.party));
      this.partyDBObject.rsvpStatus = true;
      this.partyDBObject.note = JSON.parse(JSON.stringify(this.note));
      this.partyDBObject.songRequest = JSON.parse(JSON.stringify(this.songRequest));


      await firestoreApi.rsvpParty(this.partyDBObject, docID);
    },
    goToNotePage() {
      this.partyFoundPage = false;
      this.notePage = true;
      this.rsvpProgress += 20;
    },
    goToSongPage() {
      this.notePage = false;
      this.songPage = true;
      this.rsvpProgress += 20;
    },
    goToEndPage() {
      this.songPage = false;
      this.endPage = true;
      this.rsvpProgress += 20;

      this.rsvpParty();
    },
    back() {
      if (this.notePage) {
        this.notePage = false;
        this.partyFoundPage = true;
        this.rsvpProgress -= 20;
      } else if (this.songPage) {
        this.songPage = false;
        this.notePage = true;
        this.rsvpProgress -= 20;
      }
    },
  },
};
</script>

<style scoped>

.rsvpDiv {
  padding: 10px;
  text-align: center;
}
.headingContainer {
  width: 100%;
  display: flex;
  justify-content: center;
}
.partyTable {
  margin-left: auto;
  margin-right: auto;
  width: 500px;
}
.innerContainer {
  display: flex;
  height: 100%;
  justify-content: center;
  align-content: center;
}

.centerText {
  text-align: center;
}

.centerFlex {
  justify-content: center;
  display: flex;
}

.nextBtn {
  width: 500px;
  margin-top: 35px;
  margin-bottom: 35px;
}

/* Table styles */
table {
  border: 2px solid var(--v-emerald-base);
  border-radius: 13px;
  border-spacing: 0;
  margin-top: 35px;
}

table td,
table th {
  border-bottom: 2px solid var(--v-emerald-base);
  padding: 10px;
}

table tr:last-child > td {
  border-bottom: none;
}

/* Hide mobile for desktop view */
.mobile {
  display: none;
}

/* Mobile media query */
@media screen and (max-width: 500px), print {
  .mobile {
    display: contents;
  }
  .desk {
    display: none;
  }
  .nextBtn {
    width: 100%;
  }
  .col {
    align-self: center;
  }
}
</style>