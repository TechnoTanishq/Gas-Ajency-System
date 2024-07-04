// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX1IKuwqSwO-xaNwZsn7lkp_9vKJU3kwo",
  authDomain: "gas-ajency-login.firebaseapp.com",
  projectId: "gas-ajency-login",
  storageBucket: "gas-ajency-login.appspot.com",
  messagingSenderId: "156018876682",
  appId: "1:156018876682:web:334a2f17619d83b2ed5af3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// Submit
const submit = document.getElementById("submitBtn");
submit.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("button clicked")
  // Inputs
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const check=document.getElementById("check").innerHTML;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      setTimeout(() => {
        alert("Logging in...");
      }, 3000);

      localStorage.setItem('userEmail', email.replace(/\./g, '_')); // Store email for db retrieval
      window.location.href = "userPage.html";

        })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
