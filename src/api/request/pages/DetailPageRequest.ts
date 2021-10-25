import { DetailPageProps } from "client/pages/detail/DetailPage";
import APIRequest from "../APIRequest";

class DetailPageRequest extends APIRequest {
    protected collection: string = '/detail';

    public movieById = (id: string) => this.get<DetailPageProps>(`/movie/${id}`);
    public tvShowById = (id: string) => this.get<DetailPageProps>(`/tv/${id}`);
    public personById = (id: string) => this.get<DetailPageProps>(`/person/${id}`);
}

export default new DetailPageRequest();