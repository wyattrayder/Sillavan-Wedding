<template>
  <v-app>
    <div class="bannerContainer">
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

      <h1>Wyatt and Faith</h1>
      <h2>May 27, 2023 | Clarksville, AR</h2>
    </div>
    <div class="routerContainer">
      <nav>
        <router-link to="/" class="router-link-plain">Home</router-link>
        <router-link to="/ourstory" class="router-link-plain">Our Story</router-link>
        <router-link to="/weddingparty" class="router-link-plain">Wedding Party</router-link>
        <router-link to="/registry" class="router-link-plain">Registry</router-link>
        <router-link to="/rsvp" class="router-link-plain">RSVP</router-link>
      </nav>
    </div>

    <!-- <v-app-bar color="accent" app :elevation="0">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar> -->
    <!-- 
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer> -->

    <!-- v-main is separated off from the v-app portion of the page-->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
  }),
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
  }
}
</style>
