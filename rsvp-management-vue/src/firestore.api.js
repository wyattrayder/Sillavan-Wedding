import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0csalfaY_3AsSV7UqAn3os0CmHNtcmmY",
    authDomain: "the-sillavan-wedding.firebaseapp.com",
    projectId: "the-sillavan-wedding",
    storageBucket: "the-sillavan-wedding.appspot.com",
    messagingSenderId: "775887295552",
    appId: "1:775887295552:web:3d3e85b18832d04b7cbba5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create database refernce
const db = firebase.firestore();


const firestoreApi = {

    async getParties() {
        let parties = [];
        db.collection("Parties").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                parties.push({...doc.data()})
            });
        });
        return parties;
    },


    // Using email and password sign in
    async signIn(email, password) {
        return await firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                return user;
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    },

    // Used to add parties to our database
    async addParty(partyNames) {
        
        let party = [];

        // Add names to party list of objects
        partyNames.forEach((name) => {

            party.push({
                name: name,
                isAttending: false,
            })
        })

        // Lowercase the names in the party names -- used for case sensitivity in rsvp
        let lowerNames = partyNames.map((ln) => ln.toLowerCase());


        // this stuff is default like this -- NO NEED TO EDIT
        let rsvpStatus = false;
        let songRequest = "";
        let note = "";

        //Adds to database
        db.collection("Parties").add({
            partyNames: lowerNames,
            party: party,
            rsvpStatus: rsvpStatus,
            songRequest: songRequest,
            note: note
        })
    },

}
export default firestoreApi