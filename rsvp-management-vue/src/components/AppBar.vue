<template>
  <div>
    <v-app-bar
      app
      color="green"
      dark
      src="../assets/threeFlowers.png"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <span class="nameTitle" style="width: 100%; text-align: center"
        >S.W.R.M.</span
      >
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary app class="mobile">
      <v-list nav>
        <v-list-item-group>
          <v-list-item to="/management"
            ><v-list-item-title>Home</v-list-item-title></v-list-item
          >
          <v-list-item to="/add"
            ><v-list-item-title>Add Party</v-list-item-title></v-list-item
          >
        </v-list-item-group></v-list
      >
    </v-navigation-drawer>

  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
};
</script>

<style scoped>
.nameTitle {
  line-height: 1;
  font-family: Cormorant;
  color: #231f20;
  font-size: 30px;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: bold;
}
</style>