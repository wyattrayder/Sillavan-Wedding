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
    appId: "1:775887295552:web:28e7885b3a13a0237cbba5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create database refernce
const db = firebase.firestore();

const firestoreApi = {

    async checkForGuest(name) {

        // Create a reference to the cities collection
        var guestRef = db.collection("Guests");

        console.log(guestRef)

        // Create a query against the collection.
        var query = guestRef.where("name", "==", name);

        //execute the query
        var guestArr = await query.get();

        console.log(guestArr)

        guestArr.docs.forEach((d) => {
            console.log(d.data())
        })


        return (guestArr.docs.length == 1);
    },

    async findParty(name) {

        let partyArray = []

        // Find the party and fill the party into an array (firestore is weird..)
        await db.collection("Parties").where("partyNames", "array-contains", name.toLowerCase()).get() // lowercase to make it non case sensitive
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    // console.log(doc.id, " => ", doc.data());
                    let docID = doc.id
                    partyArray.push({ ...doc.data(), docID: docID });
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            })

        // Return the first entry of the array (being the found party)
        return partyArray[0]
    },

    async rsvpParty(updateObject, docID) {

        db.collection("Parties").doc(docID).update(updateObject).then(() => {
            console.log("Document successfully updated!");
        })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            })
    },

    // this function is for local use ONLY.  This is to add parties to firestore
    async addParty() {
        // party names should be list of all LOWERCASE names
        let partyNames = ["tom daily", "ann daily"];
        // party array is a list of objects. Normal casing names!!
        let party = [
            {
                name: "Tom Daily",
                isAttending: false
            },
            {
                name: "Ann Daily",
                isAttending: false
            },

        ]

        // this stuff is default like this -- NO NEED TO EDIT
        let rsvpStatus = false;
        let songRequest = "";
        let note = "";

        // Adds to database
        db.collection("Parties").add({
            partyNames: partyNames,
            party: party,
            rsvpStatus: rsvpStatus,
            songRequest: songRequest,
            note: note
        })
    },

    async anonSignIn() {
        firebase.auth().signInAnonymously()
            .then(() => {
                console.log("Signed in successfully");
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    },

}
export default firestoreApi