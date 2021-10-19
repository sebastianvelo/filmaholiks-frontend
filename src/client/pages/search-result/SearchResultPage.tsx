import { AxiosRequestConfig } from "axios";
import { CardProps } from "client/common/components/card/Card";
import SearchBar, { SearchBarProps } from "client/components/searchbar/SearchBar";
import Section from "client/components/section/Section";
import { FetchTransformer } from "client/hooks/useFetchTransformer";
import { QueryParams } from "client/util/params/Params";
import { FunctionComponent } from "react";
import { useParams } from "react-router";

export interface SearchResultsPageProps {
    id: string;
    searchbar: SearchBarProps;
    title: (query: string) => string;
    request: (query: string) => AxiosRequestConfig;
    fetchTransformer: (id: string) => FetchTransformer<any, CardProps>;
}

const SearchResultPage: FunctionComponent<SearchResultsPageProps> = (props: SearchResultsPageProps) => {
    const { query }: QueryParams = useParams();

    return (
        <>
            <SearchBar {...props.searchbar} />
            <Section {...props} title={props.title(query)} request={props.request(query)} />
        </>
    );
}

export default SearchResultPage;