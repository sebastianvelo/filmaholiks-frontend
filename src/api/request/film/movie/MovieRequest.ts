import { Paginable } from "api/common/Params";
import IMDbRequest from "../../IMDbRequest";

class MovieRequest extends IMDbRequest {
    protected collection: string = '/movie';

    public searchByTitle = (title: string) => this.get(`/imdb_id/byTitle/${title}/`);
    public searchByStart = (year: number, params: Paginable) => this.get(`/byYear/${year}/`, params);
    public searchByGenre = (genre: string, params: Paginable) => this.get(`/byGen/${genre}/`, params);
    public detailById = (id: string) => this.get(`/id/${id}/`);
    public castById = (id: string) => this.get(`/id/${id}/cast/`);
    public awardsById = (id: string, params: Paginable) => this.get(`/id/${id}/awards/`, params);
    public upcoming = (params: Paginable) => this.get(`/order/upcoming/`, params);
    public best = (params: Paginable) => this.get(`/order/byRating/`, params);
    public popular = (params: Paginable) => this.get(`/order/byPopularity/`, params);
};

export default new MovieRequest();