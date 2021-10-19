import IMDbController from "api/controller/IMDbController";
import ActorRequest from "api/imdb/actor/ActorRequest";
import MovieRequest from "api/imdb/film/movie/MovieRequest";
import SeriesRequest from "api/imdb/film/series/SeriesRequest";
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
        getCard: IMDbController.getMovieCard,
        sections: [
            {
                title: 'Best movies',
                request: MovieRequest.best({ page_size: 35 }),
                id: 'best_movies',
            },
            {
                title: 'Popular movies',
                request: MovieRequest.popular({ page_size: 35 }),
                id: 'popular_movies',

            },
            {
                title: 'Upcoming movies',
                request: MovieRequest.upcoming({ page_size: 35 }),
                id: 'upcoming_movies',
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
        getCard: IMDbController.getSeriesCard,
        sections: [
            {
                title: 'Best TV Shows',
                request: SeriesRequest.best({ page_size: 35 }),
                id: 'best_series',
            },
            {
                title: 'Popular TV Shows',
                request: SeriesRequest.popular({ page_size: 35 }),
                id: 'popular_series',
            },
            {
                title: 'Upcoming TV Shows',
                request: SeriesRequest.upcoming({ page_size: 35 }),
                id: 'upcoming_series',
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
        getCard: IMDbController.getActorCard,
        sections: [
            {
                title: 'Birthday today',
                request: ActorRequest.searchByName('Pacino'),
                id: 'birthday_today',
            },
        ]
    }
};