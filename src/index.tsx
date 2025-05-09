import firebaseConfig from 'config/firebase/firebase.config';
import { getAuth } from 'firebase/auth';
import ReactDOM from "react-dom/client";
import React, { Suspense } from 'react';
import { HashRouter } from "react-router-dom";
import { AuthProvider, FirebaseAppProvider, useFirebaseApp } from "reactfire";
import App from './client/App';
import './client/style/output.css';

const rootElement = document.getElementById("app")!;
const root = ReactDOM.createRoot(rootElement);

const Index = () => {
  const app = useFirebaseApp(); // a parent component contains a `FirebaseAppProvider`
  const auth = getAuth(app);

  return (
    <AuthProvider sdk={auth}>
      <Suspense fallback={"Loading..."}>
        <App />
      </Suspense>
    </AuthProvider>
  );
};

root.render(
  <React.StrictMode>
    <HashRouter>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Index />
      </FirebaseAppProvider>
    </HashRouter>
  </React.StrictMode>
);
