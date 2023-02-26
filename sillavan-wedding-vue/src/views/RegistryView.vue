<template>
  <div class="container">
    <div class="providerContainer">
      <v-card
        class="providerCard"
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
        </v-layout>
      </v-card>

      <v-card
        class="providerCard"
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
        </v-layout>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.providerContainer {
  width: 100%;
  display: flex;
}
.providerCard {
  width: 50%;
  margin: 20px 20px;
  display: flex;
  height: 170px;
}

/* Small Screen Media Query */
@media screen and (max-width: 750px), print {
  .providerContainer {
    display: block;
    width: 100%;
  }

  .providerCard {
    width: 100%;
    margin: 20px 20px;
  }
}
</style>