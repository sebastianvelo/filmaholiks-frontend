import useAppBlueprint from "@hooks/useAppBlueprint";
import Footer, { FooterProps } from "./views/layout/footer/Footer";
import Main, { MainProps } from "./views/layout/main/Main";
import Navigation, { NavigationProps } from "./views/layout/navigation/Navigation";

export interface AppProps {
  navigation: NavigationProps;
  main: MainProps;
  footer: FooterProps;
}

const App: React.FC = () => {
  const blueprint = useAppBlueprint();

  return (
    <div className={`scrollbar font-sans max-w-screen overflow-x-hidden bg-gradient-to-b from-slate-200 via-slate-100 to-white dark:from-black dark:via-slate-950 dark:to-black`}>
      <Navigation {...blueprint.navigation} />
      <Main {...blueprint.main} />
      <Footer {...blueprint.footer} />
    </div>
  );
};

export default App;