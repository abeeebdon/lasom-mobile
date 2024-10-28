// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAonUI8C7_f7d0_QzczDatwL0P9UkQjTD4',
  authDomain: 'lasom-b2948.firebaseapp.com',
  projectId: 'lasom-b2948',
  storageBucket: 'lasom-b2948.appspot.com',
  messagingSenderId: '122666496707',
  appId: '1:122666496707:web:1cd60cfa1f26375123e876',
  measurementId: 'G-ZBGL2CFVWC',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export { app }
