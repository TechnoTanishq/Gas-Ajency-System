import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCItWcEKW1_YxqYVd_L2sDKOUYfueb4NdI",
  authDomain: "userdetails-1782a.firebaseapp.com",
  databaseURL: "https://userdetails-1782a-default-rtdb.firebaseio.com", // Added this line
  projectId: "userdetails-1782a",
  storageBucket: "userdetails-1782a.appspot.com",
  messagingSenderId: "343366112983",
  appId: "1:343366112983:web:87ae97c19fe0b42f9d0292"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.createAcc = function createAcc() {
  let res = confirm("Are you sure you have entered the correct details?");
  if (res) {
    window.location.href = "createAcc.html";
  }
};

window.goBack = function goBack() {
  let res = confirm("Are you sure you want to go back?");
  if (res) {
    window.location.href = "index.html";
  }
};

document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  console.log("submitted");
  const name = document.getElementById('name').value;
  const fname = document.getElementById('Fname').value;
  const sname = document.getElementById('Sname').value;
  const fullName = `${name} ${fname} ${sname}`;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const zip = document.getElementById('zip').value;
  const country = document.getElementById('country').value;
  const email = document.getElementById('Email').value.replace(/\./g, '_'); // Replaced periods in email
  const mobile = document.getElementById('mobile').value;
  const username = document.getElementById('username').value;
  const termsAccepted = document.getElementById('terms').checked;
  
  if (!termsAccepted) {
    alert("You must accept the terms and conditions");
    return;
  }
  
  // Adding data to database
  set(ref(db, 'Customers/' + email), {
    Name: fullName,
    Email: email,
    Mobile: mobile,
    Username: username,
    Address: address,
    City: city,
    State: state,
    Country: country,
    Pincode: zip
  }).then(() => {
    alert("Data added successfully in Database");
    window.location.href = "createAcc.html";
  }).catch((error) => {
    alert("Failed to add data in database");
    console.error("Error adding data: ", error);
  });
});
