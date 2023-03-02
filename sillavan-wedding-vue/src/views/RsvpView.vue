<template>
  <div class="container">
    <div class="rsvpDiv" v-if="!this.partyFound">
      <h1 style="margin: 10px">RSVP Here</h1>
      <v-row>
        <v-col cols="3"></v-col>
        <v-col><v-text-field label="Name" v-model="name"></v-text-field></v-col>
        <v-col><v-btn @click="findGuest">Find Invitation</v-btn></v-col>
        <v-col cols="3"></v-col>
      </v-row>
    </div>
    <div class="guestList" v-if="this.partyFound">
      <h1>Your party has been found!</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Attending?</th>
        </tr>
        <tr v-for="person in party" :key="person.name">
          <td>
            {{person.name}}
          </td>
          <td>
            <v-checkbox v-model="person.isAttending"></v-checkbox>
          </td>
        </tr>
      </table>
    </div>

    <v-snackbar v-model="snackbar" color="red">Name not found in the guest list</v-snackbar>
  </div>
</template>

<script>
import firestoreApi from "../firestore.api";

export default {
  data: () => ({
    name: "",
    party: {},
    partyFound: false,
    
    snackbar: false,
  }),

  methods: {
    async findGuest() {
      let partyOBJ = await firestoreApi.findParty(this.name);

      if (partyOBJ) {
        console.log(partyOBJ.party);
        this.party = partyOBJ.party;
        this.partyFound = true;
        this.$emit(
        "rsvpDialog",
        this.partyFound
      );
      } else {
        this.partyFound = false;
        this.snackbar = true;
      }
      // alert("This feature has not been set up yet :)")
    },
  },
};
</script>

<style scoped>
.rsvpDiv {
  padding: 10px;
  text-align: center;
}
</style>