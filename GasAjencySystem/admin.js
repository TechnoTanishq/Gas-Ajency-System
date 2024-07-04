import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getDatabase, ref, onValue } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js';

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

window.onload = function() {
    // Reference to the customers node in Firebase Realtime Database
    const customersRef = ref(db, 'Customers');

    // Fetch customer data once and listen for changes
    onValue(customersRef, (snapshot) => {
        const customers = snapshot.val();
        const customerList = document.getElementById('customer-list');
        customerList.innerHTML = ''; // Clear the list

        for (const key in customers) {
            if (customers.hasOwnProperty(key)) {
                const customer = customers[key];
                const customerDiv = document.createElement('div');
                customerDiv.classList.add('customer');
                customerDiv.innerHTML = `
                    <p><strong>Customer ID:</strong> ${key}</p>
                    <p><strong>Name:</strong> ${customer.Name}</p>
                    <p><strong>Email:</strong> ${customer.Email}</p>
                    <p><strong>Mobile:</strong> ${customer.Mobile}</p>
                    <p><strong>Username:</strong> ${customer.Username}</p>
                    <p><strong>Address:</strong> ${customer.Address}</p>
                    <p><strong>City:</strong> ${customer.City}</p>
                    <p><strong>State:</strong> ${customer.State}</p>
                    <p><strong>Country:</strong> ${customer.Country}</p>
                    <p><strong>Pincode:</strong> ${customer.Pincode}</p>
                `;
                customerList.appendChild(customerDiv);
            }
        }

        // Add event listener to search input
        const searchbox = document.getElementById('searchbox');
        searchbox.addEventListener('input', () => filterCustomers(customers));
    });
};

// Filter customers based on search query
function filterCustomers(customers) {
    const query = document.getElementById('searchbox').value.toLowerCase();
    const customerList = document.getElementById('customer-list');
    customerList.innerHTML = ''; // Clear the list

    for (const key in customers) {
        if (customers.hasOwnProperty(key)) {
            const customer = customers[key];
            const customerInfo = `${customer.Name} ${customer.Email} ${customer.Mobile} ${customer.Username} ${customer.Address} ${customer.City} ${customer.State} ${customer.Country} ${customer.Pincode}`.toLowerCase();
            if (customerInfo.includes(query)) {
                const customerDiv = document.createElement('div');
                customerDiv.classList.add('customer');
                customerDiv.innerHTML = `
                    <p><strong>Customer ID:</strong> ${key}</p>
                    <p><strong>Name:</strong> ${customer.Name}</p>
                    <p><strong>Email:</strong> ${customer.Email}</p>
                    <p><strong>Mobile:</strong> ${customer.Mobile}</p>
                    <p><strong>Username:</strong> ${customer.Username}</p>
                    <p><strong>Address:</strong> ${customer.Address}</p>
                    <p><strong>City:</strong> ${customer.City}</p>
                    <p><strong>State:</strong> ${customer.State}</p>
                    <p><strong>Country:</strong> ${customer.Country}</p>
                    <p><strong>Pincode:</strong> ${customer.Pincode}</p>
                `;
                customerList.appendChild(customerDiv);
            }
        }
    }
}
