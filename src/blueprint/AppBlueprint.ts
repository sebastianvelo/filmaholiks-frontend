import { AppProps } from "client/App";
import UserEntity from "shared/entity/user/UserEntity";
import footerBlueprint from "./footer/FooterBlueprint";
import mainBlueprint from "./main/MainBlueprint";
import navigationBlueprint from "./navigation/NavigationBlueprint";

const appBlueprint = (user?: UserEntity | null): AppProps => ({
  navigation: navigationBlueprint(user),
  main: mainBlueprint(),
  footer: footerBlueprint()
});

export default appBlueprint;
