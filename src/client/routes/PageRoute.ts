enum PageRoute {
  HOME = "/home",
  LOGIN = "/login",
  ERROR = "/*",
  ACCOUNT = "/account",
  TV_EXPLORE = "/tv",
  TV_DETAIL = "/tv/:id",
  TV_SEARCH = "/tv/search/:query",
  MOVIE_EXPLORE = "/movie",
  MOVIE_DETAIL = "/movie/:id",
  MOVIE_SEARCH = "/movie/search/:query",
  PERSON_EXPLORE = "/person",
  PERSON_DETAIL = "/person/:id",
  PERSON_SEARCH = "/person/search/:query",
}

export default PageRoute;
