// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX1IKuwqSwO-xaNwZsn7lkp_9vKJU3kwo",
  authDomain: "gas-ajency-login.firebaseapp.com",
  projectId: "gas-ajency-login",
  storageBucket: "gas-ajency-login.appspot.com",
  messagingSenderId: "156018876682",
  appId: "1:156018876682:web:334a2f17619d83b2ed5af3",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)


//submit
const submit = document.getElementById  ("submitBtn");
submit.addEventListener("click", function (event) {
  event.preventDefault();


  //inputs
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Account Created , You can go to Home page and Login");
      window.location.href="index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});


