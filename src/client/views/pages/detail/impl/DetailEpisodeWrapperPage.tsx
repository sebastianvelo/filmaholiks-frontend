import FetcherPage from "@components/fetcher/FetcherPage";
import { AxiosRequestConfig } from "axios";
import { DetailEpisodePageParams } from "client/types/params/Params";
import { useParams } from "react-router";
import DetailPage, { DetailPageProps } from "../DetailPage";

export interface DetailEpisodeWrapperPageProps {
    getPage: (id: string, season: string, episode: string) => AxiosRequestConfig<DetailPageProps>;
}

const DetailEpisodeWrapperPage: React.FC<DetailEpisodeWrapperPageProps> = (props: DetailEpisodeWrapperPageProps) => {
    const { id, season, episode }: DetailEpisodePageParams = useParams();
    
    return (
        <FetcherPage getPage={props.getPage(id, season, episode)} Component={DetailPage} />
    );
}

export default DetailEpisodeWrapperPage;