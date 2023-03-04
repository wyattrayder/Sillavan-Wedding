<template>
  <v-app class="background">
    <v-main >
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),

  methods: {
    checkIfLoggedIn() {
      if (sessionStorage.getItem("loggedIn") != "true") {
        this.$router.push("/");
      }
    },
  },
  mounted() {
    this.checkIfLoggedIn();
  }
};
</script>

<style scoped>
.background {
  background-color: var(--v-tan-base);
}
</style>
