// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth ,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWhLWjqCO6dL1d9wlnctVLWTqilwQfKE4",
  authDomain: "jarvis-9c6b0.firebaseapp.com",
  projectId: "jarvis-9c6b0",
  storageBucket: "jarvis-9c6b0.appspot.com",
  messagingSenderId: "1015717720823",
  appId: "1:1015717720823:web:9d29778a58f3c290bc99f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const submit=document.getElementById('submit');
submit.addEventListener("click",function(event){
    event.preventDefault();

    const email=document.getElementById('email').value;
const password=document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("creating account");
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
})