import { AppProps } from "client/App";
import mainBlueprint from "./main/MainBlueprint";
import navigationBlueprint from "./navigation/NavigationBlueprint";

const appBlueprint: AppProps = {
  navigation: navigationBlueprint,
  main: mainBlueprint 
};

export default appBlueprint;
