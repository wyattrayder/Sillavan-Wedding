<template>
  <div>
    <app-bar-vue />
    <v-text-field v-model="search" solo append-icon="mdi-magnify" label="Filter Parties by Name" class="searchBar"></v-text-field>
    <v-row>
      <v-col v-for="(p, index) in filteredList" :key="index">
        <table class="partyTable hover">
          <tr>
            <th>Party Name(s)</th>
            <th>Attending</th>
          </tr>
          <tr v-for="person in p.party" :key="person.name">
            <td>
              {{ person.name }}
            </td>
            <td class="centerFlex">
              <v-checkbox color="emerald" disabled></v-checkbox>
            </td>
          </tr>
        </table>
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
      if (this.search != "") {
        // THIS IS SO COOL!!
        let filteredParties =  this.parties.filter((p) => {
           return p.partyNames.some( r => r.includes(this.search.toLowerCase()));
        });

        // let test =  this.parties.filter((p) => {
        //    return p.partyNames.includes(this.search.toLowerCase());
        // });
        return filteredParties;
      } else {
        return this.parties;
      }
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