import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { NavigationProps } from "client/layout/navigation/Navigation";
import PageRoute from "client/routes/PageRoute";

const navigationBlueprint = (): NavigationProps => ({
  header: "IFDb",
  menu: {
    options: [
      {
        path: PageRoute.HOME,
        label: "Profile",
        color: ComponentHovereableColor.PRIMARY
      },
      {
        path: PageRoute.ACCOUNT,
        label: "Account",
        color: ComponentHovereableColor.PRIMARY
      },
      {
        path: PageRoute.HOME,
        label: "Settings",
        color: ComponentHovereableColor.PRIMARY
      },
      {
        path: PageRoute.HOME,
        label: "Logout",
        color: ComponentHovereableColor.DANGER
      },
    ],
    toggler: {
      alt: 'https://picsum.photos/200',
      src: 'https://picsum.photos/200',
    }
  },
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
      path: PageRoute.TV_EXPLORE
    },
    {
      label: "People",
      path: PageRoute.PERSON_EXPLORE
    },
    {
      label: "Login",
      path: PageRoute.LOGIN
    },
  ],
});

export default navigationBlueprint;
