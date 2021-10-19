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
    ACCOUNT = "/account"
}

export default PageRoute;
