import IMDbController from "api/controller/IMDbController";
import ExplorePage, { ExplorePageProps } from "client/pages/explore/ExplorePage";
import PageRoute from "client/routes/PageRoute";
import Page from "client/util/page/Page";

export const MovieExplorePageBlueprint: Page<ExplorePageProps> = {
    route: PageRoute.MOVIE_EXPLORE,
    component: ExplorePage,
    props: {
        searchbar: {
            placeholder: "Search movies...",
            path: PageRoute.MOVIE_SEARCH,
        },
        sections: [
            {
                title: 'Best movies',
                id: 'best_movies',
                getIDs: IMDbController.getBestMovies(),
                getCard: IMDbController.getMovieCard,
            },
            {
                title: 'Popular movies',
                id: 'popular_movies',
                getIDs: IMDbController.getPopularMovies(),
                getCard: IMDbController.getMovieCard,
            },
            {
                title: 'Upcoming movies',
                id: 'upcoming_movies',
                getIDs: IMDbController.getUpcomingMovies(),
                getCard: IMDbController.getMovieCard,
            },
        ]
    }
};

export const SeriesExplorePageBlueprint: Page<ExplorePageProps> = {
    route: PageRoute.SERIES_EXPLORE,
    component: ExplorePage,
    props: {
        searchbar: {
            placeholder: "Search TV Shows...",
            path: PageRoute.SERIES_SEARCH,
        },
        sections: [
            {
                title: 'Best TV Shows',
                id: 'best_series',
                getIDs: IMDbController.getBestSeries(),
                getCard: IMDbController.getSeriesCard,
            },
            {
                title: 'Popular TV Shows',
                id: 'popular_series',
                getIDs: IMDbController.getPopularSeries(),
                getCard: IMDbController.getSeriesCard,
            },
            {
                title: 'Upcoming TV Shows',
                id: 'upcoming_series',
                getIDs: IMDbController.getUpcomingSeries(),
                getCard: IMDbController.getSeriesCard,
            },
        ]
    }
};

export const ActorExplorePageBlueprint: Page<ExplorePageProps> = {
    route: PageRoute.ACTOR_EXPLORE,
    component: ExplorePage,
    props: {
        searchbar: {
            placeholder: "Search actors...",
            path: PageRoute.ACTOR_SEARCH,
        },
        sections: [
            {
                title: 'Birthday today',
                id: 'birthday_today',
                getIDs: IMDbController.getBornToday(),
                getCard: IMDbController.getActorCard,
            },
        ]
    }
};