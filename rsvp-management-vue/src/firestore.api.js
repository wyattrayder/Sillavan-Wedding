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

    getTest() {
        var docRef = db.collection("Parties").doc("5Ae9GKwDaewpLXWc50gq");

        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    },


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
    }

}
export default firestoreApi