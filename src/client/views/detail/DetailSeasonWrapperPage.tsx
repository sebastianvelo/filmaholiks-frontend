import { AxiosRequestConfig } from "axios";
import FetcherPage from "client/common/components/fetcher/FetcherPage";
import { DetailSeasonPageParams } from "client/common/params/Params";
import { FunctionComponent } from "react";
import { useParams } from "react-router";
import DetailPage, { DetailPageProps } from "../pages/detail/DetailPage";

export interface DetailSeasonWrapperPageProps {
    getPage: (...params: string[]) => AxiosRequestConfig<DetailPageProps>;
}

const DetailSeasonWrapperPage: FunctionComponent<DetailSeasonWrapperPageProps> = (props: DetailSeasonWrapperPageProps) => {
    const { id, season}: DetailSeasonPageParams = useParams();
    return (
        <FetcherPage getPage={props.getPage(id, season)} Component={DetailPage} />
    );
}

export default DetailSeasonWrapperPage;