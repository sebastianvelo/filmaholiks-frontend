enum PageRoute {
  HOME = "/home",
  LOGIN = "/login",
  ERROR = "/*",
  SERIES_EXPLORE = "/series",
  SERIES_DETAIL = "/series/:id",
  SERIES_SEARCH = "/series/search/:query",
  MOVIE_EXPLORE = "/movie",
  MOVIE_DETAIL = "/movie/:id",
  MOVIE_SEARCH = "/movie/search/:query",
  ACCOUNT = "/account",
  ACTOR_EXPLORE = "/actor",
  ACTOR_DETAIL = "/actor/:id",
  ACTOR_SEARCH = "/actor/search/:query",
}

export default PageRoute;
