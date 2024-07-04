// // Initialize Firebase
// var firebaseConfig = {
//     apiKey: "YOUR_API_KEY",
//     authDomain: "YOUR_AUTH_DOMAIN",
//     databaseURL: "YOUR_DATABASE_URL",
//     projectId: "YOUR_PROJECT_ID",
//     storageBucket: "YOUR_STORAGE_BUCKET",
//     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//     appId: "YOUR_APP_ID"
// };
// firebase.initializeApp(firebaseConfig);

// // References to the DOM elements
// const balanceElement = document.getElementById('balance');
// const recentActivityList = document.querySelector('.recent-activity ul');
// const notificationsElement = document.querySelector('.notifications p');
// const bookingForm = document.getElementById('bookingForm');
// const bookingHistoryTableBody = document.querySelector('#booking-history tbody');
// const profileForm = document.getElementById('profileForm');

// // Fetch and display user data
// firebase.auth().onAuthStateChanged(user => {
//     if (user) {
//         const userId = user.uid;
//         const userRef = firebase.database().ref('users/' + userId);

//         userRef.on('value', snapshot => {
//             const data = snapshot.val();
//             balanceElement.textContent = data.balance;
//             // Populate recent activities, notifications, and profile details
//         });

//         // Fetch booking history
//         const bookingRef = firebase.database().ref('bookings/' + userId);
//         bookingRef.on('value', snapshot => {
//             bookingHistoryTableBody.innerHTML = '';
//             snapshot.forEach(booking => {
//                 const bookingData = booking.val();
//                 const row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td>${bookingData.date}</td>
//                     <td>${bookingData.status}</td>
//                     <td>${bookingData.paymentMethod}</td>
//                     <td>${bookingData.amount}</td>
//                 `;
//                 bookingHistoryTableBody.appendChild(row);
//             });
//         });
//     } else {
//         window.location.href = 'login.html';
//     }
// });

// // Handle booking form submission
// bookingForm.addEventListener('submit', e => {
//     e.preventDefault();

//     const deliveryAddress = document.getElementById('deliveryAddress').value;
//     const paymentMethod = document.getElementById('paymentMethod').value;
//     const userId = firebase.auth().currentUser.uid;

//     const newBookingRef = firebase.database().ref('bookings/' + userId).push();
//     newBookingRef.set({
//         date: new Date().toLocaleString(),
//         status: 'Pending',
//         paymentMethod: paymentMethod,
//         amount: '50.00',
//         deliveryAddress: deliveryAddress
//     });

//     alert('Booking request submitted');
//     bookingForm.reset();
// });

// // Edit profile
// function editProfile() {
//     // Implement profile editing functionality
// }
