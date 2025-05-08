import { FunctionComponent } from "react";
import useAppBlueprint from "./hooks/useAppBlueprint";
import Footer, { FooterProps } from "./views/layout/footer/Footer";
import Main, { MainProps } from "./views/layout/main/Main";
import Navigation, { NavigationProps } from "./views/layout/navigation/Navigation";

export interface AppProps {
  navigation: NavigationProps;
  main: MainProps;
  footer: FooterProps;
}

const App: FunctionComponent = () => {
  const blueprint = useAppBlueprint();
  
  return (
    <div className={`font-roboto max-w-screen overflow-x-hidden bg-gradient-to-b from-secondary-lighter via-light to-secondary-lighter dark:from-secondary-dark dark:via-secondary dark:to-secondary-dark`}>
      <Navigation {...blueprint.navigation} />
      <Main {...blueprint.main} />
      <Footer {...blueprint.footer} />
    </div>
  );
};

export default App;