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
            transformer: (i: MovieDetailById) => ({
                title: i.title,
                subtitle: i.year.toString(),
                image: {
                    src: i.image_url,
                    alt: i.title
                }
            })
        }),
        sections: [
            {
                title: 'Best movies',
                request: MovieRequest.best({ page_size: 35 }),
                carouselId: 'best_movies',
            },
            {
                title: 'Popular movies',
                request: MovieRequest.popular({ page_size: 35 }),
                carouselId: 'popular_movies',

            },
            {
                title: 'Upcoming movies',
                request: MovieRequest.upcoming({ page_size: 35 }),
                carouselId: 'upcoming_movies',
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
            transformer: (i: SeriesDetailById) => ({
                title: i.title,
                subtitle: i.start_year.toString(),
                image: {
                    src: i.image_url,
                    alt: i.title
                }
            })
        }),
        sections: [
            {
                title: 'Best TV Shows',
                request: SeriesRequest.best({ page_size: 35 }),
                carouselId: 'best_series',
            },
            {
                title: 'Popular TV Shows',
                request: SeriesRequest.popular({ page_size: 35 }),
                carouselId: 'popular_series',
            },
            {
                title: 'Upcoming TV Shows',
                request: SeriesRequest.upcoming({ page_size: 35 }),
                carouselId: 'upcoming_series',
            },
        ]
    }
};
