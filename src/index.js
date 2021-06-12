import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase, FieldValue }}>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root')
);

/**
 * Client Side Rendered App: React (CRA)
 ** -> Database which is Firebase
 ** -> react-loading-skeleton
 *
 * Tailwind
 *
 * Folder Structure
 ** src
 *** -> components
 *** -> constants
 *** -> context
 *** -> helpers
 *** -> lib (firebase is going to live in here)
 *** -> services (firebase functions in here)
 *** -> styles (tailwind's folder (app/tailwind))
 *
 */
