import { NavigationProps } from "client/layout/navigation/Navigation";
import PageRoute from "client/routes/PageRoute";

const navigationBlueprint = (): NavigationProps => ({
  header: "Header",
  actions: [
    {
      label: "Home",
      path: PageRoute.HOME
    },
    {
      label: "Movies",
      path: PageRoute.MOVIE_EXPLORE
    }, 
    {
      label: "TV Shows",
      path: PageRoute.SERIES_EXPLORE
    },
    {
      label: "Login",
      path: PageRoute.LOGIN
    },
  ],
});

export default navigationBlueprint;
