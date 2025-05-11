import useFetch from "@hooks/useFetch";
import { AxiosRequestConfig } from "axios";
import { QueryParams } from "client/types/params/Params";
import SearchBar, { SearchBarProps } from "client/views/components/common/searchbar/SearchBar";
import { useParams } from "react-router";
import SearchResultPageBody, { SearchResultPageBodyProps } from "./body/SearchResultPageBody";

export interface SearchResultPageBlueprintProps {
    getPage: (query: string) => AxiosRequestConfig<SearchResultPageProps>;
}

export interface SearchResultPageProps {
    title: string;
    searchbar: SearchBarProps;
    body: SearchResultPageBodyProps;
}

const SearchResultPage: React.FC<SearchResultPageBlueprintProps> = (props: SearchResultPageBlueprintProps) => {
    const { query }: QueryParams = useParams();
    const page = useFetch<SearchResultPageProps>(props.getPage(query));
    
    document.title = page?.data?.title ?? "Loading...";
    
    return (
        <>
            <SearchBar {...page?.data?.searchbar} />
            <SearchResultPageBody {...page?.data?.body} />
        </>
    );
}

export default SearchResultPage;