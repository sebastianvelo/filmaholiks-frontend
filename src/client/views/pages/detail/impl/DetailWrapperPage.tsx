import FetcherPage from "@components/fetcher/FetcherPage";
import { AxiosRequestConfig } from "axios";
import { IdParams } from "client/types/params/Params";
import { useParams } from "react-router";
import DetailPage, { DetailPageProps } from "../DetailPage";

export interface DetailWrapperPageProps {
    getPage: (id: string) => AxiosRequestConfig<DetailPageProps>;
}

const DetailWrapperPage: React.FC<DetailWrapperPageProps> = (props: DetailWrapperPageProps) => {
    const { id }: IdParams = useParams();

    return (
        <FetcherPage getPage={props.getPage(id)} Component={DetailPage} />
    );
}

export default DetailWrapperPage;