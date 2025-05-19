// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCQ9pRGkwr6HnfNhmUo5mQWF5pFu8dWOIU",
  authDomain: "road-safety-with-iot.firebaseapp.com",
  databaseURL: "https://road-safety-with-iot-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "road-safety-with-iot",
  storageBucket: "road-safety-with-iot.firebasestorage.app",
  messagingSenderId: "933210627734",
  appId: "1:933210627734:web:2e60a902520895ce926cb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Reference your data path (adjust it to match your structure)
const dataRef = ref(db, 'sensor-data'); // Change to your path

// Display data in HTML
const container = document.getElementById('data-container');

onValue(dataRef, (snapshot) => {
  container.innerHTML = ""; // Clear old data
  const data = snapshot.val();

  for (const key in data) {
    const entry = data[key];
    const div = document.createElement('div');
    div.className = 'data-card';
    div.innerHTML = `
      <p><strong>Time:</strong> ${entry.timestamp || key}</p>
      <p><strong>Alcohol Level:</strong> ${entry.alcohol}</p>
      <p><strong>Motor Status:</strong> ${entry.motorStatus}</p>
      <p><strong>Location:</strong> ${entry.location}</p>
    `;
    container.appendChild(div);
  }
});
