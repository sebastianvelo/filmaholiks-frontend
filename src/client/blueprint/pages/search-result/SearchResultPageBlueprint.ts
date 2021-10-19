import ActorRequest from "api/imdb/actor/ActorRequest";
import { ActorDetailById } from "api/imdb/actor/ActorResponse.types";
import MovieRequest from "api/imdb/film/movie/MovieRequest";
import { MovieDetailById } from "api/imdb/film/movie/MovieResponse.types";
import SeriesRequest from "api/imdb/film/series/SeriesRequest";
import { SeriesDetailById } from "api/imdb/film/series/SeriesResponse.types";
import SearchResultPage, { SearchResultsPageProps } from "client/pages/search-result/SearchResultPage";
import PageRoute from "client/routes/PageRoute";
import Page from "client/util/page/Page";

export const MovieSearchResultPageBlueprint: Page<SearchResultsPageProps> = {
    route: PageRoute.MOVIE_SEARCH,
    component: SearchResultPage,
    props: {
        id: `result_movie`,
        searchbar: {
            placeholder: "Search movies...",
            path: PageRoute.MOVIE_SEARCH,
        },
        title: (query: string) => `Results of "${query}"`,
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
        request: (query: string) => MovieRequest.searchByTitle(query)
    }
};

export const SeriesSearchResultPageBlueprint: Page<SearchResultsPageProps> = {
    route: PageRoute.SERIES_SEARCH,
    component: SearchResultPage,
    props: {
        id: `result_series`,
        searchbar: {
            placeholder: "Search TV Shows...",
            path: PageRoute.SERIES_SEARCH,
        },
        title: (query: string) => `Results of "${query}"`,
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
        request: (query: string) => SeriesRequest.searchByTitle(query)
    }
};

export const ActorSearchResultPageBlueprint: Page<SearchResultsPageProps> = {
    route: PageRoute.ACTOR_SEARCH,
    component: SearchResultPage,
    props: {
        id: `result_actor`,
        searchbar: {
            placeholder: "Search actors...",
            path: PageRoute.ACTOR_SEARCH,
        },
        title: (query: string) => `Results of "${query}"`,
        fetchTransformer: (id: string) => ({
            request: ActorRequest.detailById(id),
            transformer: (actor: ActorDetailById) => ({
                title: actor.name,
                subtitle: actor.birth_date,
                image: {
                    src: actor.image_url,
                    alt: actor.name
                },
                path: `${PageRoute.ACTOR_EXPLORE}/${id}`
            })
        }),
        request: (query: string) => ActorRequest.searchByName(query)
    }
};

