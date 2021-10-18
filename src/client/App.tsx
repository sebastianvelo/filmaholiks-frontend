import { FunctionComponent } from "react";
import Footer, { FooterProps } from "./layout/footer/Footer";
import Main, { MainProps } from "./layout/main/Main";
import Navigation, { NavigationProps } from "./layout/navigation/Navigation";

const APP_CLASS_NAME = `font-sans`;

export interface AppProps {
  navigation: () => NavigationProps;
  main: () => MainProps;
  footer: () => FooterProps;
 }

const App: FunctionComponent<AppProps> = (props: AppProps) => {

  return (
    <div className={APP_CLASS_NAME}>
      <Navigation {...props.navigation()} />
      <Main {...props.main()} />
      <Footer {...props.footer()}/>
    </div>
  );
};

export default App;