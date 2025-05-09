import firebaseConfig from 'config/firebase/firebase.config';
import { FirebaseApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import React, { Suspense } from 'react';
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { AuthProvider, FirebaseAppProvider, useFirebaseApp } from "reactfire";
import App from './client/App';
import './client/style/output.css';

const rootElement = document.getElementById("app")!;
const root = ReactDOM.createRoot(rootElement);

const Index = () => {
  const app: FirebaseApp = useFirebaseApp();
  const auth: Auth = getAuth(app);

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
