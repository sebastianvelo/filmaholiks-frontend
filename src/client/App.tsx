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
    <div className={`font-sans max-w-screen overflow-x-hidden bg-gradient-to-b from-slate-100 via-white to-slate-100 dark:from-slate-900 dark:via-black dark:to-slate-900`}>
      <Navigation {...blueprint.navigation} />
      <Main {...blueprint.main} />
      <Footer {...blueprint.footer} />
    </div>
  );
};

export default App;