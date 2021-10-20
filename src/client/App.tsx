import { FunctionComponent } from "react";
import Footer, { FooterProps } from "./layout/footer/Footer";
import Main, { MainProps } from "./layout/main/Main";
import Navigation, { NavigationProps } from "./layout/navigation/Navigation";

export interface AppProps {
  navigation: () => NavigationProps;
  main: () => MainProps;
  footer: () => FooterProps;
 }

const App: FunctionComponent<AppProps> = (props: AppProps) => {
  return (
    <div className={`font-sans`}>
      <Navigation {...props.navigation()} />
      <Main {...props.main()} />
      <Footer {...props.footer()}/>
    </div>
  );
};

export default App;