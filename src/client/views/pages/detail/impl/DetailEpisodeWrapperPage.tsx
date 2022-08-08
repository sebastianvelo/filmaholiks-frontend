import { AxiosRequestConfig } from "axios";
import FetcherPage from "client/common/components/fetcher/FetcherPage";
import { DetailEpisodePageParams } from "client/common/params/Params";
import { FunctionComponent } from "react";
import { useParams } from "react-router";
import DetailPage, { DetailPageProps } from "../DetailPage";

export interface DetailEpisodeWrapperPageProps {
    getPage: (id: string, season: string, episode: string) => AxiosRequestConfig<DetailPageProps>;
}

const DetailEpisodeWrapperPage: FunctionComponent<DetailEpisodeWrapperPageProps> = (props: DetailEpisodeWrapperPageProps) => {
    const { id, season, episode }: DetailEpisodePageParams = useParams();
    return (
        <FetcherPage getPage={props.getPage(id, season, episode)} Component={DetailPage} />
    );
}

export default DetailEpisodeWrapperPage;