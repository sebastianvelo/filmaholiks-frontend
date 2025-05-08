import firebaseConfig from 'config/firebase/firebase.config';
import { getAuth } from 'firebase/auth';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import { AuthProvider, FirebaseAppProvider, useFirebaseApp } from "reactfire";
import App from './client/App';
import './client/style/output.css';

const Index = () => {
  const app = useFirebaseApp(); // a parent component contains a `FirebaseAppProvider`

  // initialize Database and Auth with the normal Firebase SDK functions
  const auth = getAuth(app);

  return (
    <AuthProvider sdk={auth}>
      <Suspense fallback={"Loading..."}>
        <App />
      </Suspense>
    </AuthProvider>
  );
};

ReactDOM.render((
  <React.StrictMode>
    <HashRouter>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Index />
      </FirebaseAppProvider>
    </HashRouter>
  </React.StrictMode>
), document.getElementById('app'));