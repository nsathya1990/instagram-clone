import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

/** Here I want to import the Seed File */
/* import { seedDatabase } from '../seed'; */

const config = {};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

/** Here is where we want to call the seed file (only ONCE!) */
/** seedDatabase(firebase) */

console.log('firebase', firebase);

export { firebase, FieldValue };
