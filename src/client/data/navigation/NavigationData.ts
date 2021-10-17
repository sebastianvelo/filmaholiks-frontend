import { NavigationProps } from "@client/layout/navigation/Navigation";
import PageRoute from "client/routes/PageRoute";

const navigationData = (): NavigationProps => ({
  header: "Header",
  actions: [
    {
      label: "Home",
      path: PageRoute.HOME
    },
    {
      label: "Login",
      path: PageRoute.LOGIN
    },
  ],
});

export default navigationData;
