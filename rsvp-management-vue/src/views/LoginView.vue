<template>
  <div class="container">

    <h1>Sillavan Wedding RSVP Manager</h1>

    <div class="loginFieldsContainer">
      <v-card class="loginFieldCard rounded-xl" outlined>
        <v-container fill-height class="container">
          <v-row justify="center" align="center">
            <v-col>
              <!-- Username text field -->
              <v-text-field
                label="Email"
                placeholder="Email"
                v-model="email"
                class="loginFieldComponents"
                v-on:keyup.enter="signIn"
                solo
                tabindex="1"
              >
                <v-icon slot="prepend" color="tan" class="loginIcon">
                  mdi-account-circle
                </v-icon>
              </v-text-field>

              <!-- Password text field-->
              <v-text-field
                label="Password"
                placeholder="Password"
                type="password"
                v-model="password"
                class="loginFieldComponents"
                solo
                v-on:keyup.enter="signIn"
                tabindex="2"
              >
                <v-icon slot="prepend" color="tan" class="loginIcon">
                  mdi-lock
                </v-icon>
              </v-text-field>

              <!-- Login button -->
              <v-btn
                @click="verifyCredentials"
                color="tan"
                class="loginFieldComponents"
                >Sign-In</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>

    <v-snackbar v-model="snackbar" color="red"
      >Invalid Username and Passoword</v-snackbar
    >
  </div>
</template>

<script>
import firestoreApi from "../firestore.api";
export default {
  data: () => ({
    email: "",
    password: "",

    snackbar: false,
  }),

  methods: {
    // Sign into firebase. If successful, route to management screen. Else, NOTHING!
    async signIn() {
      let user = await firestoreApi.signIn(this.email, this.password);

      if (user) {
        console.log("Logged in successfully");
        this.$router.push("/management");
        sessionStorage.setItem("loggedIn", "true");
      } else this.snackbar = true;
    },
  },
};
</script>

<style scoped>
h1 {
  line-height: 1;
  margin: 16px 0;
  font-family: Cormorant;
  color: #231f20;
  font-size: 40px;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding-top: 10px;
}
.loginFieldsContainer {
  height: 100%;
  background-color: var(--v-tan-base) !important;
}
.loginFieldCard {
  height: 300px;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  top: 25%;
  text-align: center;
  border-color: var(--v-text-base);
  border-width: 5px;
  background-color: var(--v-emerald-base) !important;
}
.loginField {
  width: 100%;
}
.loginFieldComponents {
  width: 90% !important;
  margin-left: auto;
  margin-right: auto;
}
.loginIcon {
  font-size: 30pt !important;
}
:deep .v-input__prepend-outer {
  margin-top: 4px !important;
}
.container {
  background-color: rgba(0, 0, 0, 0) !important;
  text-align: -webkit-center;
  height: 100%;
}
</style>