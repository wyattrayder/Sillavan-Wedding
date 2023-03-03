<template>
  <div>
    <v-text-field label="Email" v-model="email"></v-text-field>
    <v-text-field label="Password" v-model="password" type="password"></v-text-field>
    <v-btn @click="signIn">Login</v-btn>

    <v-snackbar v-model="snackbar" color="red">Invalid Username and Passoword</v-snackbar>
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
            let user = await firestoreApi.signIn(this.email, this.password)
            
            if(user)
            {
                console.log("Logged in successfully");
                this.$router.push("/management");
            }
            else 
                this.snackbar = true;
        }
    }
};
</script>

<style scoped>
</style>