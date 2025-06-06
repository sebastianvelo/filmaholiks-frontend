import FetcherPage from "@components/fetcher/FetcherPage";
import { AxiosRequestConfig } from "axios";
import { DetailSeasonPageParams } from "client/types/params/Params";
import { useParams } from "react-router";
import DetailPage, { DetailPageProps } from "../DetailPage";

export interface DetailSeasonWrapperPageProps {
    getPage: (id: string, season: string) => AxiosRequestConfig<DetailPageProps>;
}

const DetailSeasonWrapperPage: React.FC<DetailSeasonWrapperPageProps> = (props: DetailSeasonWrapperPageProps) => {
    const { id, season }: DetailSeasonPageParams = useParams();
    
    return (
        <FetcherPage getPage={props.getPage(id, season)} Component={DetailPage} />
    );
}

export default DetailSeasonWrapperPage;