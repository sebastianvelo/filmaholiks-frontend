import { AxiosRequestConfig } from "axios";
import FetcherPage from "client/common/components/fetcher/FetcherPage";
import { IdParams } from "client/util/params/Params";
import { FunctionComponent } from "react";
import { useParams } from "react-router";
import DetailPage, { DetailPageProps } from "../../pages/detail/DetailPage";

export interface DetailWrapperPageProps {
    getPage: (id: string) => AxiosRequestConfig<DetailPageProps>;
}

const DetailWrapperPage: FunctionComponent<DetailWrapperPageProps> = (props: DetailWrapperPageProps) => {
    const { id }: IdParams = useParams();
    return (
        <FetcherPage getPage={props.getPage(id)} Component={DetailPage} />
    );
}

export default DetailWrapperPage;