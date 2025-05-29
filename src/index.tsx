import firebaseConfig from "config/firebase/firebase.config";
import { auth } from "config/firebase/firebaseApp";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { AuthProvider, FirebaseAppProvider } from "reactfire";
import App from "./client/App";
import "./client/style/output.css";

const rootElement = document.getElementById("app")!;
const root = ReactDOM.createRoot(rootElement);

const Index = () => {
  return (
    <React.StrictMode>
      <HashRouter>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
          <AuthProvider sdk={auth}>
            <Suspense fallback={"Loading..."}>
              <App />
            </Suspense>
          </AuthProvider>
        </FirebaseAppProvider>
      </HashRouter>
    </React.StrictMode>
  );
};

root.render(<Index />);
