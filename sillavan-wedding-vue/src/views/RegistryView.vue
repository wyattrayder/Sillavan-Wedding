<template>
  <div>
    <nav-and-header/>
    <div class="providerCardsContainer">
      <v-row no-gutters>
        <v-col class="regColumm" xs="12" sm="12" md="6" 
          ><v-card
            class="providerCard2"
            href="https://www.walmart.com/registry/WR/c839ab95-93ca-475e-b088-d666c8c08f48"
            target="_blank"
          >
            <v-layout justify-center align-center>
              <v-flex shrink>
                <div>
                  <v-img
                    src="../assets/RegistryProviders/walmart.png"
                    width="300px"
                  ></v-img>
                </div>
              </v-flex>
            </v-layout> </v-card
        ></v-col>
        <v-col class="regColumm" xs="12" sm="12" md="6" 
          ><v-card 
            class="providerCard2"
            href="https://www.amazon.com/wedding/wyatt-sillavan-faith-walker--may-2023/registry/2N5MAW9Z44Q2J"
            target="_blank"
          >
            <v-layout justify-center align-center>
              <v-flex shrink>
                <div>
                  <v-img
                    src="../assets/RegistryProviders/amazon.png"
                    width="300px"
                  ></v-img>
                </div>
              </v-flex>
            </v-layout> </v-card
        ></v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import NavAndHeader from '@/components/navAndHeader.vue';
export default { 
  components: { NavAndHeader }
};
</script>

<style scoped>

.providerCard2 {
  width: 100%;
  padding: 10px;
  display: flex;
  height: 170px;
}

.regColumm {
  margin: 0;
  padding: 30px !important;
}
</style>