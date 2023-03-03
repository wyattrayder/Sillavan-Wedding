<template> 
  <div>
    <v-app-bar
      absolute
      color="green"
      dark
      shrink-on-scroll
      src="../assets/threeFlowers.png"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <span class="nameTitle" style="width: 100%; text-align: center;">Sillavan Wedding RSVP Management</span>

      
    </v-app-bar>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nameTitle {
  line-height: 1;
  font-family: Cormorant;
  color: #231f20;
  font-size: 52px;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: bold;
}
</style>