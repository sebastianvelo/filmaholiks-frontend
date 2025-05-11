import FetcherPage from "@components/fetcher/FetcherPage";
import { AxiosRequestConfig } from "axios";
import SessionUserHelper from "client/helper/SessionUserHelper";
import { IdParams } from "client/types/params/Params";
import { useParams } from "react-router";
import DetailPage, { DetailPageProps } from "../DetailPage";

export interface DetailWrapperPageProps {
    getPage: (id: string, userLoggedIn?: string | null) => AxiosRequestConfig<DetailPageProps>;
}

const DetailWrapperPage: React.FC<DetailWrapperPageProps> = (props: DetailWrapperPageProps) => {
    const { id }: IdParams = useParams();
    const user = SessionUserHelper.getUser();

    return (
        <FetcherPage getPage={props.getPage(id, user?.userName)} Component={DetailPage} />
    );
}

export default DetailWrapperPage;