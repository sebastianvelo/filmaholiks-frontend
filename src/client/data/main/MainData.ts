import { MainProps } from "@client/layout/main/Main";
import HomePage from "client/pages/home/HomePage";
import PageRoute from "client/routes/PageRoute";

const mainData = (): MainProps => ({
    pages: [
      {
        route: PageRoute.HOME,
        component: HomePage
      }
    ]
});

export default mainData;
