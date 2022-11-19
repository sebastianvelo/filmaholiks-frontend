import { AxiosRequestConfig } from "axios";
import FetcherPage from "client/common/components/fetcher/FetcherPage";
import { IdParams } from "client/common/params/Params";
import SessionUserHelper from "client/helper/SessionUserHelper";
import { FunctionComponent } from "react";
import { useParams } from "react-router";
import DetailPage, { DetailPageProps } from "../DetailPage";

export interface DetailWrapperPageProps {
    getPage: (id: string, userLoggedIn?: string | null) => AxiosRequestConfig<DetailPageProps>;
}

const DetailWrapperPage: FunctionComponent<DetailWrapperPageProps> = (props: DetailWrapperPageProps) => {
    const { id }: IdParams = useParams();
    const user = SessionUserHelper.getUser();

    return (
        <FetcherPage getPage={props.getPage(id, user?.userName)} Component={DetailPage} />
    );
}

export default DetailWrapperPage;