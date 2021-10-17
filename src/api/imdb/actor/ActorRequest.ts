import { Paginable } from "api/common/Params";
import IMDbRequest from "../IMDbRequest";

class ActorRequest extends IMDbRequest {
    protected collection: string = '/actor';

    public searchByName = (name: string) => this.get(`/imdb_id_byName/${name}/`);
    public detailsById = (id: string) => this.get(`/id/${id}/`);
    public bioById = (id: string) => this.get(`/id/${id}/bio/`);
    public allRolesById = (id: string, params: Paginable) => this.get(`/id/${id}/all_roles/`, params);
    public awardsById = (id: string, params: Paginable) => this.get(`/id/${id}/awards/`, params);
};

export default new ActorRequest();