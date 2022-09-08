      // Import the functions you need from the SDKs you need
      import { initializeApp } from "firebase/app";
      import { getAnalytics } from "firebase/analytics";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries
      
      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
        apiKey: "AIzaSyC9QJDwaperyx4U6yBbdWX0QqpafAYFsIY",
        authDomain: "fin-matrix.firebaseapp.com",
        projectId: "fin-matrix",
        storageBucket: "fin-matrix.appspot.com",
        messagingSenderId: "1061705345710",
        appId: "1:1061705345710:web:9eb0072d0f05e930269b3f",
        measurementId: "G-YZN1ZNF9V7"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      