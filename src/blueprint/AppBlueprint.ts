import { AppProps } from "client/App";
import footerBlueprint from "./footer/FooterBlueprint";
import mainBlueprint from "./main/MainBlueprint";
import navigationBlueprint from "./navigation/NavigationBlueprint";

const appBlueprint: AppProps = {
  navigation: navigationBlueprint,
  main: mainBlueprint,
  footer: footerBlueprint
};

export default appBlueprint;
