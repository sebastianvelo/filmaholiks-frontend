import { AxiosRequestConfig } from "axios";
import { CardProps } from "client/common/components/card/Card";
import Section from "client/components/section/Section";
import { Service } from "client/hooks/useService";
import { QueryParams } from "client/util/params/Params";
import { FunctionComponent } from "react";
import { useParams } from "react-router";

export interface SearchResultsPageProps {
    id: string;
    title: (query: string) => string;
    request: (query: string) => AxiosRequestConfig;
    getCard: (id: string) => Service<any, CardProps>;
}

const SearchResultPage: FunctionComponent<SearchResultsPageProps> = (props: SearchResultsPageProps) => {
    const { query }: QueryParams = useParams();

    return (
        <>
            <Section {...props} title={props.title(query)} request={props.request(query)} />
        </>
    );
}

export default SearchResultPage;