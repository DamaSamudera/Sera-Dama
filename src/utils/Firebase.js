import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBMzbpriHLuCgyB6nfeGkcfdXGpOqdcOwM',
  authDomain: 'sera-dama.firebaseapp.com',
  databaseURL: 'https://sera-dama-default-rtdb.firebaseio.com',
  projectId: 'sera-dama',
  storageBucket: 'sera-dama.appspot.com',
  messagingSenderId: '565155023823',
  appId: '1:565155023823:web:6f8e01b2b25c9b495260ba',
  measurementId: 'G-54JW4S4QVC'
};
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export default fb.database().ref();
