// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    /*   apiKey: process.env.REACT_APP_apiKey,
      authDomain: process.env.REACT_APP_authDomain,
      projectId: process.env.REACT_APP_projectId,
      storageBucket: process.env.REACT_APP_storageBucket,
      messagingSenderId: process.env.REACT_APP_messagingSenderId,
      appId: process.env.REACT_APP_appId, */
    apiKey: "AIzaSyCL4wqcHsFNeCbp1Ui5pvMwLMQ0GNWnTGg",
    authDomain: "genius-car-services-74a54.firebaseapp.com",
    projectId: "genius-car-services-74a54",
    storageBucket: "genius-car-services-74a54.appspot.com",
    messagingSenderId: "481346021691",
    appId: "1:481346021691:web:c95933920abfa365deef1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;