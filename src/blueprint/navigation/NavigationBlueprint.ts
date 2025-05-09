import ComponentHovereableColor from "@tailwind-helper/constants/ComponentHovereableColor";
import PageRoute, { PageRouteBuilder } from "shared/routes/PageRoute";
import { NavigationProps } from "client/views/layout/navigation/Navigation";
import UserEntity from "shared/entity/user/UserEntity";

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
  }, /*
  {
    label: "Sign up",
    path: PageRoute.AUTH
  }, */
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

const loggedInMenu = (user: UserEntity) => ({
  options: [
    {
      path: PageRouteBuilder.USER_DETAIL(user.userName),
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
    src: user.avatar,
  }
});

const navigationBlueprint = (user?: UserEntity | null): NavigationProps => ({
  header: "Filmaholiks",
  actions: user ? loggedInActions() : loggedOutActions(),
  menu: user ? loggedInMenu(user) : undefined
});

export default navigationBlueprint;
