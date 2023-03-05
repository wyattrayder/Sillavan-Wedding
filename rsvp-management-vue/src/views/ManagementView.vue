<template>
  <div class="container">
    <app-bar-vue />
    <v-text-field
      v-model="search"
      solo
      append-icon="mdi-magnify"
      label="Filter Parties by Name"
      class="searchBar"
    ></v-text-field>
    <v-select
      v-model="selectedFilter"
      :items="dropdownItems"
      solo
      class="searchBar"
      item-color="emerald"
    ></v-select>
    <div class="countsDiv">
      <v-row>
        <v-col>
          <p>Total Guests: {{ totalGuests }}</p>
        </v-col>
        <v-col>
          <p>Guests Coming: {{ guestsComing }}</p>
        </v-col>
        <v-col>Guests Not Coming: {{ guestsNotComing }}</v-col>
      </v-row>
    </div>
    <v-row class="tableRow">
      <v-col v-for="(p, index) in filteredList" :key="index">
        <!-- V-dialog to show popup with more information -->
        <v-dialog max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <!-- Table bound to v-dialog -->
            <table class="partyTable hover" v-on="on" v-bind="attrs">
              <tr>
                <th>Party Name(s)</th>
                <th>Attending</th>
              </tr>
              <tr v-for="person in p.party" :key="person.name">
                <td>
                  {{ person.name }}
                </td>
                <td class="centerFlex">
                  <v-checkbox
                    color="emerald"
                    disabled
                    v-model="person.isAttending"
                  ></v-checkbox>
                </td>
              </tr>
            </table>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="primary" dark
                >{{ p.party[0].name }}'s Party</v-toolbar
              >
              <v-card-text class="dialogText">
                <v-row>
                  <v-col
                    ><v-textarea
                      outlined
                      auto-grow
                      disabled
                      :value="p.note"
                      label="Note to Bride and Groom"
                    ></v-textarea
                  ></v-col>
                  <v-col
                    ><v-textarea
                      outlined
                      auto-grow
                      disabled
                      :value="p.songRequest"
                      label="Song Request(s)"
                    ></v-textarea
                  ></v-col>
                </v-row>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AppBarVue from "@/components/AppBar.vue";
import firestoreApi from "../firestore.api";
export default {
  data: () => ({
    parties: [],
    search: "",
    selectedFilter: "All",
    dropdownItems: ["All", "Has RSVP'd", "Hasn't RSVP'd"],
  }),
  methods: {
    async getParties() {
      this.parties = await firestoreApi.getParties();

      // Using local storage for testing
      // this.parties = JSON.parse(localStorage.getItem("parties"));
    },
  },

  mounted() {
    this.getParties();
  },

  computed: {
    filteredList() {
      let filteredParties = [];

      // First, filter by RSVP status (Has, Hasn't, or All)
      if (this.selectedFilter == "Has RSVP'd") {
        filteredParties = this.parties.filter((p) => {
          return p.rsvpStatus == true;
        });
      } else if (this.selectedFilter == "Hasn't RSVP'd") {
        filteredParties = this.parties.filter((p) => {
          return p.rsvpStatus == false;
        });
      } else filteredParties = this.parties;

      // Then, filter that by the user's search value!
      if (this.search != "") {
        // THIS IS SO COOL!!
        filteredParties = filteredParties.filter((p) => {
          return p.partyNames.some((r) =>
            r.includes(this.search.toLowerCase())
          );
        });
        return filteredParties;
      } else {
        return filteredParties;
      }
    },
    totalGuests() {
      let numGuests = 0;
      this.parties.forEach((p) => {
        numGuests += p.party.length;
      });
      return numGuests;
    },
    guestsComing() {
      let comingCount = 0;

      this.parties.forEach((p) => {
        p.party.forEach((p2) => {
          if (p2.isAttending == true) comingCount++;
        });
      });

      return comingCount;
    },
    guestsNotComing() {
      let notComingCount = 0;

      this.parties.forEach((p) => {
        p.party.forEach((p2) => {
          if (p2.isAttending == false) notComingCount++;
        });
      });

      return notComingCount;
    },
  },

  components: { AppBarVue },
};
</script>

<style scoped>
.partyTable {
  margin-left: auto;
  margin-right: auto;
  width: 500px;
}
.searchBar {
  margin-top: 10px;
  padding-left: 100px;
  padding-right: 100px;
}
.container {
  background-color: var(--v-tan-base);
}
.tableRow {
  margin: auto auto;
}
.dialogText {
  padding: 24px 20px !important;
}

/* Table styles */
table {
  border: 5px solid var(--v-emerald-base);
  border-spacing: 0;
  margin-top: 35px;
  cursor: pointer;
}

table th {
  background-color: var(--v-emerald-base);
  color: white;
}

table td,
table th {
  border-bottom: 2px solid var(--v-emerald-base);
  padding: 10px;
}

table tr:last-child > td {
  border-bottom: none;
}

tr:nth-child(even) {
  background-color: #d3d3d3;
}
tr:nth-child(odd) {
  background-color: #c3c3c3;
}

.centerFlex {
  justify-content: center;
  display: flex;
}

/* Media Query for only non-touch devices */
@media (hover: hover) {
  .hover:hover {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
  }
  .hover {
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    transition: all 0.2s linear;
    cursor: pointer;
  }
}
</style>