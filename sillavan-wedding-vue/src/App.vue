<template>
  <v-app>

    <!-- Commented code below is the navigation -- moved to individual pages cause some didnt need it -->

    <!-- Mobile Nav -->
    <!-- <v-app-bar color="emerald" dense app :elevation="0" class="mobile">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar> -->

    <!-- <v-navigation-drawer v-model="drawer" temporary app class="mobile">
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item to="/">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/ourstory">
            <v-list-item-title>Our Story</v-list-item-title>
          </v-list-item>

          <v-list-item to="/weddingparty">
            <v-list-item-title>Wedding Party</v-list-item-title>
          </v-list-item>

          <v-list-item to="/registry">
            <v-list-item-title>Registry</v-list-item-title>
          </v-list-item>

          <v-list-item to="/rsvp">
            <v-list-item-title>RSVP</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <div>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <div style="padding-top: 30px">
              <v-img src="./assets/Flowers/smallTwig.png" width="200px" eager />
            </div>
          </v-flex>
        </v-layout>
      </div>
    </v-navigation-drawer> -->

    <!-- Flowers at top of all pages -->
    <!-- <div class="bannerContainer">
      <div class="flowerBanner">
        <div>
          <v-img
            src="./assets/Flowers/threeFlowers.png"
            width="700"
            eager
            class="responsive"
          >
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular
                  color="grey-lighten-4"
                  indeterminate
                ></v-progress-circular>
              </div>
            </template>
          </v-img>
        </div>
      </div>

      <h1 v-if="!this.partyFound">Wyatt and Faith</h1>
      <h2 v-if="!this.partyFound">May 27, 2023 | Clarksville, AR</h2>
    </div> -->

    <!-- Desktop/Tablet Nav -->
    <!-- <div class="routerContainer" v-if="!this.partyFound">
      <nav>
        <router-link to="/" class="router-link-plain">Home</router-link>
        <router-link to="/ourstory" class="router-link-plain"
          >Our Story</router-link
        >
        <router-link to="/weddingparty" class="router-link-plain"
          >Wedding Party</router-link
        >
        <router-link to="/registry" class="router-link-plain"
          >Registry</router-link
        >
        <router-link to="/rsvp" class="router-link-plain">RSVP</router-link>
      </nav>
    </div> -->

    <!-- v-main is separated off from the v-app portion of the page-->
    <v-main style="padding: 0px;">
      <router-view @rsvpDialog="rsvpDialog"/>
    </v-main>

    <!-- Footer -->
    <v-footer class="text-center d-flex flex-column">
      <div>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <div style="padding-top: 30px">
              <v-img src="./assets/Flowers/smallTwig.png" width="200px" eager />
            </div>
          </v-flex>
        </v-layout>
      </div>
      <div class="initials">W&F</div>

      <div class="date">5.27.23</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    partyFound: false,
  }),

  methods: {
    rsvpDialog(partyFound) {
      this.partyFound = partyFound;
    }
  }
};
</script>

<style scoped>
/* Main Component Styles */
h1 {
  font-family: Cormorant;
  color: #231f20;
  font-size: 52px;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 3px;
}

h2 {
  font-family: Nunito;
  letter-spacing: 3px;
  color: #231f20;
  font-size: 20px;
  font-weight: lighter;
  text-transform: uppercase;
}

a {
  margin: 10px;
}

footer .initials {
  /* padding: 16px 18px; */
  font-family: Cormorant;
  color: #231f20;
  font-size: 52px;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 3px;
}

footer .date {
  /* padding: 20px 18px 0; */
  font-family: Nunito;
  letter-spacing: 3px;
  color: #231f20;
  font-size: 20px;
  font-weight: lighter;
  text-transform: uppercase;
  /*border-top: 1px solid #231f20;*/
}

.router-link-plain {
  color: black;
  text-decoration: none;
}

.router-link-exact-active {
  /* Class for the active router link */
  color: var(--v-emerald-base);
  text-decoration: underline;
}

/* Container Styles */
.bannerContainer {
  width: 100%;
  text-align: center;
}

.flowerBanner {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -100px;
}

.routerContainer {
  display: flex;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 25px;
}

.mobile {
  display: none;
}

/* Small Screen Media Query */
@media screen and (max-width: 750px), print {
  h1 {
    font-size: 39px;
  }

  h2 {
    font-size: 15px;
  }

  .flowerBanner {
    display: block;
    margin-top: 50px;
  }

  .mobile {
    display: block;
  }

  .routerContainer {
    display: none;
  }
}
</style>
