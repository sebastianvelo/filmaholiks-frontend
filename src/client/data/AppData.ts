import { AppProps } from "@client/App";
import mainData from "./main/MainData";
import navigationData from "./navigation/NavigationData";

const appData: AppProps = {
  navigation: navigationData,
  main: mainData 
};

export default appData;
