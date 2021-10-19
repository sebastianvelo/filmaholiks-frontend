import ExplorePage, { ExplorePageProps } from "client/pages/explore/ExplorePage";
import PageRoute from "client/routes/PageRoute";
import Page from "client/util/page/Page";
import MovieRequest from "api/imdb/film/movie/MovieRequest";
import { MovieDetailById } from "api/imdb/film/movie/MovieResponse.types";
import SeriesRequest from "api/imdb/film/series/SeriesRequest";
import { SeriesDetailById } from "api/imdb/film/series/SeriesResponse.types";

export const MovieExplorePageBlueprint: Page<ExplorePageProps> = {
    route: PageRoute.MOVIE_EXPLORE,
    component: ExplorePage,
    props: {
        fetchTransformer: (id: string) => ({
            request: MovieRequest.detailById(id),
            transformer: (movie: MovieDetailById) => ({
                title: movie.title,
                subtitle: movie.year.toString(),
                image: {
                    src: movie.image_url,
                    alt: movie.title
                },
                path: `${PageRoute.MOVIE_EXPLORE}/${id}`
            })
        }),
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
        fetchTransformer: (id: string) => ({
            request: SeriesRequest.detailById(id),
            transformer: (serie: SeriesDetailById) => ({
                title: serie.title,
                subtitle: serie.start_year.toString(),
                image: {
                    src: serie.image_url,
                    alt: serie.title
                },
                path: `${PageRoute.SERIES_EXPLORE}/${id}`
            })
        }),
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
