<template>
  <div>
    <nav-and-header/>
    <!-- Home image (Faith and Wyatt Proposal) -->
    <v-layout justify-center align-center>
      <v-flex shrink>
        <div><v-img src="../assets/Photos/framedPortrait.png" width="1000px" eager/></div>
      </v-flex>
    </v-layout>

    <!-- <div class="quote">
      <p>I am my beloved and my beloved is mine -- Song of Solomon 6:3</p>
    </div> -->
  </div>
</template>

<script>
import NavAndHeader from '@/components/navAndHeader.vue';
export default {
  name: "HomeView",

  components: { NavAndHeader },
};
</script>

<style scoped>
h1 {
  line-height: 1;
  margin: 16px 0;
  font-family: Cormorant;
  color: #231f20;
  font-size: 52px;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding-top: 180px;
  padding-bottom: 20px;
}
/* div {
  font-family: Nunito;
} */

.quote {
  text-align: center;
  width: 100%;
}
</style>
