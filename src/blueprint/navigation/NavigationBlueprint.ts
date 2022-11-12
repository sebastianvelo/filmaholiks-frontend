import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import PageRoute, { PageRouteBuilder } from "shared/routes/PageRoute";
import { NavigationProps } from "client/views/layout/navigation/Navigation";

const loggedOutActions = () => [
  {
    label: "Movies",
    path: PageRoute.MOVIE_EXPLORE,
    auth: true,
  },
  {
    label: "TV Shows",
    path: PageRoute.SHOW_EXPLORE
  },
  {
    label: "People",
    path: PageRoute.PERSON_EXPLORE
  },
  {
    label: "Sign up",
    path: PageRoute.AUTH
  },
];

const loggedInActions = () => [
  {
    label: "Movies",
    path: PageRoute.MOVIE_EXPLORE,
    auth: true,
  },
  {
    label: "TV Shows",
    path: PageRoute.SHOW_EXPLORE
  },
  {
    label: "People",
    path: PageRoute.PERSON_EXPLORE
  },
];

const loggedInMenu = (user: any) => ({
  options: [
    {
      path: PageRouteBuilder.USER_DETAIL(user.displayName),
      label: "Profile",
      color: ComponentHovereableColor.PRIMARY
    },
    {
      path: PageRoute.ACCOUNT,
      label: "Account",
      color: ComponentHovereableColor.PRIMARY
    },/*
    {
      path: PageRoute.HOME,
      label: "Settings",
      color: ComponentHovereableColor.PRIMARY
    },
    {
      path: PageRoute.HOME,
      label: "Logout",
      color: ComponentHovereableColor.DANGER
    }, */
  ],
  toggler: {
    alt: user.email,
    src: user.photoURL,
  }
});

const navigationBlueprint = (user: any): NavigationProps => ({
  header: "Filmaholiks",
  actions: user ? loggedInActions() : loggedOutActions(),
  menu: user ? loggedInMenu(user) : undefined
});

export default navigationBlueprint;
