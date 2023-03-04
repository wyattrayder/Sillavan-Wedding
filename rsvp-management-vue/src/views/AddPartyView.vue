<template>
  <div style="text-align: center">
    <app-bar-vue />
    <h2>Add New Party</h2>
    <v-row>
      <v-col></v-col>
      <v-col cols="1">
        <v-text-field class="numField" :value="numInParty" @input="numInParty = parseInt($event)" single-line type="number"/>
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row>
      <v-col sm="0"></v-col>
      <v-col xs="12" sm="6" md="4" lg="4">
        <v-btn @click="addMember" class="rowButtons" style="margin-right: 2px"
          >Add Member</v-btn
        >
        <v-btn @click="deleteMember" class="rowButtons" style="margin-left: 2px"
          >Remove Member</v-btn
        >
      </v-col>
      <v-col sm="0"></v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(x, index) in numInParty"
        :key="x"
        xs="12"
        sm="6"
        md="4"
        lg="4"
      >
        <v-text-field
        class="nameField"
          :label="'Party Member #' + (index + 1)"
          placeholder="Name"
          v-model="partyMembers[index]"
        ></v-text-field>
      </v-col>
      <v-col></v-col>
    </v-row>

    <v-btn @click="addParty" style="margin-top: 30px"
      >Add Party to Guestlist</v-btn
    >
  </div>
</template>

<script>
import AppBarVue from "@/components/AppBar.vue";
import firestoreApi from "../firestore.api";
export default {
  data: () => ({
    numInParty: 1,
    partyMembers: [],
  }),
  methods: {
    addMember() {
      this.numInParty++;
    },
    deleteMember() {
      this.numInParty--;
    },
    async addParty() {
      await firestoreApi.addParty(this.partyMembers);
    },
    checkNumField(value) {
        console.log(value);
    },
  },
  components: { AppBarVue },
};
</script>

<style scoped>
h2 {
  line-height: 1;
  font-family: Cormorant;
  color: #231f20;
  font-size: 30px;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.rowButtons {
  background-color: var(--v-emerald-lighten1) !important;
}
.nameField {
    padding-left: 40px;
    padding-right: 40px;
}
.numField {
    padding-left: 20px;
    padding-right: 20px;
}
.numField >>> input {
      text-align: center
    }
</style>