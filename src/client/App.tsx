import ActorRequest from "api/imdb/actor/ActorRequest";
import { DetailsById } from "api/imdb/actor/ActorResponse.types";
import { FunctionComponent } from "react";
import { useFetch } from "./hooks/useFetch";
import Footer from "./layout/footer/Footer";
import Main, { MainProps } from "./layout/main/Main";
import Navigation, { NavigationProps } from "./layout/navigation/Navigation";

const APP_CLASS_NAME = `font-sans`;

export interface AppProps {
  navigation: () => NavigationProps;
  main: () => MainProps;
 }

const App: FunctionComponent<AppProps> = (props: AppProps) => {
  const results = useFetch<DetailsById>(ActorRequest.detailsById('nm0000199'));
  console.log(results);
  return (
    <div className={APP_CLASS_NAME}>
      <Navigation {...props.navigation()} />
      <Main {...props.main()} />
      <Footer />
    </div>
  );
};

export default App;