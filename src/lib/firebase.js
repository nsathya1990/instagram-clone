import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

/** Here I want to import the Seed File */

const config = {
    apiKey: 'AIzaSyCwbRqZDnqc6Vgcdmlu_fEJIdc3nd4g7gE',
    authDomain: 'instagram-yt-effd1.firebaseapp.com',
    databaseURL: 'https://instagram-yt-effd1-default-rtdb.firebaseio.com',
    projectId: 'instagram-yt-effd1',
    storageBucket: 'instagram-yt-effd1.appspot.com',
    messagingSenderId: '22127523027',
    appId: '1:22127523027:web:215edefd077b5505cf9026'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

/** Here is where we want to call the seed file (only ONCE!) */
/** seedDatabase(firebase) */

console.log('firebase', firebase);

export { firebase, FieldValue };
