import { AxiosRequestConfig } from "axios";
import CardsSection, { CardsSectionProps } from "client/views/components/cards-section/CardsSection";
import SearchBar, { SearchBarProps } from "client/views/components/searchbar/SearchBar";
import useFetch from "client/hooks/useFetch";
import { FunctionComponent } from "react";
import { useParams } from "react-router";
import { QueryParams } from "client/common/params/Params";

export interface SearchResultPageBlueprintProps {
    getPage: (query: string) => AxiosRequestConfig<SearchResultPageProps>;
}

export interface SearchResultPageProps {
    title: string;
    searchbar: SearchBarProps;
    results: CardsSectionProps;
}

const SearchResultPage: FunctionComponent<SearchResultPageBlueprintProps> = (props: SearchResultPageBlueprintProps) => {
    const { query }: QueryParams = useParams();
    const page = useFetch<SearchResultPageProps>(props.getPage(query));
    document.title = page?.data?.title ?? "Loading...";
    return (
        <div>
            <SearchBar {...page?.data?.searchbar} />
            <CardsSection {...(page?.data?.results)} />
        </div>
    );
}

export default SearchResultPage;