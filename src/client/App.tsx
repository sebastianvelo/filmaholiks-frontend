import { FunctionComponent } from "react";
import AppData from "./data/AppData";
import Footer from "./layout/footer/Footer";
import Main from "./layout/main/Main";
import Navigation from "./layout/navigation/Navigation";

const APP_CLASS_NAME = `font-sans`;

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div className={APP_CLASS_NAME}>
      <Navigation {...AppData.navigation} />
      <Main />
      <Footer />
    </div>
  );
};

export default App;