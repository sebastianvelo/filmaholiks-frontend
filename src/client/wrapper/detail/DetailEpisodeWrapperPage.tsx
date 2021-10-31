import { AxiosRequestConfig } from "axios";
import FetcherPage from "client/common/components/fetcher/FetcherPage";
import { DetailEpisodePageParams } from "client/util/params/Params";
import { FunctionComponent } from "react";
import { useParams } from "react-router";
import DetailPage, { DetailPageProps } from "../../pages/detail/DetailPage";

export interface DetailEpisodeWrapperPageProps {
    getPage: (...params: string[]) => AxiosRequestConfig<DetailPageProps>;
}

const DetailEpisodeWrapperPage: FunctionComponent<DetailEpisodeWrapperPageProps> = (props: DetailEpisodeWrapperPageProps) => {
    const { id, season, episode }: DetailEpisodePageParams = useParams();
    return (
        <FetcherPage getPage={props.getPage(id, season, episode)} Component={DetailPage} />
    );
}

export default DetailEpisodeWrapperPage;