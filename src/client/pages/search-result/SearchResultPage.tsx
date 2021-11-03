import { AxiosRequestConfig } from "axios";
import CarouselSection, { CarouselSectionProps } from "client/components/carousel-section/CarouselSection";
import SearchBar, { SearchBarProps } from "client/components/searchbar/SearchBar";
import useFetch from "client/hooks/useFetch";
import { QueryParams } from "client/util/params/Params";
import { FunctionComponent } from "react";
import { useParams } from "react-router";

export interface SearchResultPageBlueprintProps {
    getPage: (query: string) => AxiosRequestConfig<SearchResultPageProps>;
}
export interface SearchResultPageProps {
    searchbar: SearchBarProps;
    results: CarouselSectionProps
}

const SearchResultPage: FunctionComponent<SearchResultPageBlueprintProps> = (props: SearchResultPageBlueprintProps) => {
    const { query }: QueryParams = useParams();
    const page = useFetch<SearchResultPageProps>(props.getPage(query));
    return (
        <>
            <SearchBar {...page?.data?.searchbar} />
            <CarouselSection {...(page?.data?.results ?? { cards: undefined })} />
        </>
    );
}

export default SearchResultPage;