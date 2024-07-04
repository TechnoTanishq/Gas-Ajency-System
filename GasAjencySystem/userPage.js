import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCItWcEKW1_YxqYVd_L2sDKOUYfueb4NdI",
  authDomain: "userdetails-1782a.firebaseapp.com",
  databaseURL: "https://userdetails-1782a-default-rtdb.firebaseio.com",
  projectId: "userdetails-1782a",
  storageBucket: "userdetails-1782a.appspot.com",
  messagingSenderId: "343366112983",
  appId: "1:343366112983:web:87ae97c19fe0b42f9d0292"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function retrieveData() {
  const userEmail = localStorage.getItem('userEmail');
  const dbRef = ref(db);
  console.log(userEmail);

  get(child(dbRef, `Customers/${userEmail}`)).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log("Retrieved data:", data);

      // Store data in variables
      const name = data.Name;
      const email = data.Email;
      const mobile = data.Mobile;
      const address = data.Address;
      const city = data.City;
      const state = data.State;
      const country = data.Country;
      const zip = data.Pincode;

      document.getElementById("name").value = name;
      document.getElementById("email").value = email;
      document.getElementById("contact").value = mobile;
      const fullAddress = `${address}, ${city}, ${state}, ${country}`;
      document.getElementById("address").value = fullAddress;

    } else {
      alert("No data available for the provided email.");
    }
  }).catch((error) => {
    console.error("Error retrieving data:", error);
  });
}

//this will call the retrievedata fn on page load
window.onload = retrieveData;

//this is my logout function which gets me to homepage
window.logout = function logout() {
  let conRes = confirm("Are you sure you want to logout?");
  if (conRes) {
    window.location.href = "home.html";
  }
};


document.addEventListener("DOMContentLoaded", () => {
  const bookBtn = document.querySelector(".bookBtn");
  const remBarrelsElement = document.getElementById("remBarrels");
  const historyTableBody = document.querySelector("#booking_history tbody");

  function bookCylinder() {
      const dev_address = document.getElementById("devaddress").value;
      const phone = document.getElementById("phone").value;
      const paymentMethod = document.getElementById("payment-method").value;
      const amount = document.getElementById("amt").value;



      const currentBarrels = parseInt(remBarrelsElement.innerText);

      if (currentBarrels > 0) {
          // Decrease remaining barrels
          remBarrelsElement.innerText = currentBarrels - 1;

          // Get the current date
          const currentDate = new Date().toLocaleDateString();

          // Add booking to the history table
          const newRow = historyTableBody.insertRow();
          newRow.innerHTML = `
              <td>${currentDate}</td>
              <td>Booked</td>
              <td>${paymentMethod}</td>
              <td>${dev_address}</td>
              <td>${phone}</td>
              <td>${amount}</td>
          `;

          // Clear form fields
          document.getElementById("devaddress").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("payment-method").value = "cod";
      } else {
          alert("No remaining barrels available for booking.");
      }
  }

  bookBtn.addEventListener("click", (event) => {
      event.preventDefault();
      bookCylinder();
  });
});

