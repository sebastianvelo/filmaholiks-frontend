enum PageRoute {
  HOME = "/home",
  LOGIN = "/login",
  ERROR = "/*",
  ACCOUNT = "/account",
  MOVIE_EXPLORE = "/movie",
  MOVIE_DETAIL = "/movie/:id",
  MOVIE_SEARCH = "/movie/search/:query",
  PERSON_EXPLORE = "/person",
  PERSON_DETAIL = "/person/:id",
  PERSON_SEARCH = "/person/search/:query",
  SHOW_EXPLORE = "/show",
  SHOW_DETAIL = "/show/:id",
  SHOW_SEARCH = "/show/search/:query",
  SEASON_DETAIL = "/show/:id/s/:season",
  EPISODE_DETAIL = "/show/:id/s/:season/e/:episode",
}

export default PageRoute;
