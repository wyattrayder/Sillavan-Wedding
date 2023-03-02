<template>
  <div>
    <!-- Bride and Groom -->
    <div>
      <v-row no-gutters>
        <v-col></v-col>
        <v-col class="partyCard" xs="12" sm="6" md="3" lg="3">
          <v-card class="hover">
            <v-img src="../assets/Photos/default.jpg" height="300px"></v-img>
            <v-card-title> Wyatt Sillavan </v-card-title>
            <v-card-subtitle> Groom </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col class="partyCard" xs="12" sm="6" md="3" lg="3">
          <v-card class="hover">
            <v-img src="../assets/Photos/default.jpg" height="300px"></v-img>
            <v-card-title> Faith Walker </v-card-title>
            <v-card-subtitle> Bride </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col></v-col>
      </v-row>
    </div>

    <!-- Bridesmaids -->
    <div class="rowDiv">
      <h2>Bridesmaids</h2>
      <v-row no-gutters>
        <v-col class="partyCard" xs="12" sm="6" md="3" lg="3">
          <v-card class="hover">
            <v-img
              src="../assets/Photos/Bridesmaids/madison2.jpg"
              height="300px"
            ></v-img>
            <v-card-title> Madison Walker </v-card-title>
            <v-card-subtitle> Matron of Honor </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col class="partyCard" xs="12" sm="6" md="3" lg="3">
          <v-card class="hover">
            <v-img src="../assets/Photos/default.jpg" height="300px"></v-img>
            <v-card-title> Rachel Jacobs </v-card-title>
            <v-card-subtitle> Bridesmaid </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col class="partyCard" xs="12" sm="6" md="3" lg="3">
          <v-card class="hover">
            <v-img
              src="../assets/Photos/Bridesmaids/hailey.jpg"
              height="300px"
            ></v-img>
            <v-card-title> Hailey Addison </v-card-title>
            <v-card-subtitle> Bridesmaid </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col class="partyCard" xs="12" sm="6" md="3" lg="3">
          <v-card class="hover">
            <v-img
              src="../assets/Photos/Bridesmaids/jarely.jpg"
              height="300px"
            ></v-img>
            <v-card-title> Jarely Ramirez </v-card-title>
            <v-card-subtitle> Bridesmaid </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- Groomsmen -->
    <div class="rowDiv">
      <h2>Groomsmen</h2>
      <v-row no-gutters>
        <v-col class="partyCard" xs="12" sm="6" md="3" lg="3">
          <v-card class="hover">
            <v-img src="../assets/Photos/default.jpg" height="300px"></v-img>
            <v-card-title> Patrick Karp </v-card-title>
            <v-card-subtitle> Best Man </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col class="partyCard" xs="12" sm="6" md="3" lg="3">
          <v-card class="hover">
            <v-img src="../assets/Photos/default.jpg" height="300px"></v-img>
            <v-card-title> Hunter Lawrence </v-card-title>
            <v-card-subtitle> Groomsman </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col class="partyCard" xs="12" sm="6" md="3" lg="3">
          <v-card class="hover">
            <v-img
              src="../assets/Photos/Groomsmen/birch.jpg"
              height="300px"
            ></v-img>
            <v-card-title> Jacob Birch </v-card-title>
            <v-card-subtitle> Groomsman </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col class="partyCard" xs="12" sm="6" md="3" lg="3">
          <v-card class="hover">
            <v-img
              src="../assets/Photos/Groomsmen/vatsal.jpg"
              height="300px"
            ></v-img>
            <v-card-title> Vatsal Patel </v-card-title>
            <v-card-subtitle> Groomsman </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- Flower Girl -->
    <div class="rowDiv">
      <h2>Flower Girl</h2>
      <v-row no-gutters>
        <v-col><v-sheet class="pa-2 ma-2"> </v-sheet></v-col>
        <v-col class="partyCard" xs="12" sm="6" md="3" lg="3">
          <v-card class="hover">
            <v-img src="../assets/Photos/brinlee.jpg" height="300px"></v-img>
            <v-card-title> Brinlee Walker </v-card-title>
            <v-card-subtitle> Flower Girl </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col><v-sheet class="pa-2 ma-2"> </v-sheet></v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.partyCard {
  margin: 0;
  padding: 30px !important;
}
.rowDiv {
  width: 100%;
  text-align: center;
}
h1,
h2 {
  font-family: "Pacifico", cursive;
}
.v-card__title {
  display: block;
  text-align: center;
}
.v-card__subtitle {
  display: block;
  text-align: center;
}

.hover {
  padding: 10px;
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