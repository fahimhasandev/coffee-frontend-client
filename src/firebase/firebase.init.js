// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTQnP8kkipLDO3KTgBDjKO6rU4MqPe4_A",
  authDomain: "coffee-store-ae874.firebaseapp.com",
  projectId: "coffee-store-ae874",
  storageBucket: "coffee-store-ae874.firebasestorage.app",
  messagingSenderId: "425883121289",
  appId: "1:425883121289:web:5a70d694c740a253f9f858"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

export default auth
