import { AxiosRequestConfig } from "axios";
import MediaSection, { MediaSectionProps } from "client/components/section/MediaSection";
import { useFetch } from "client/hooks/useFetch";
import { QueryParams } from "client/util/params/Params";
import { FunctionComponent } from "react";
import { useParams } from "react-router";
export interface SearchResultsPageBlueprintProps {
    getPage: (query: string) => AxiosRequestConfig<SearchResultsPageProps>;
}
export interface SearchResultsPageProps {
    section: MediaSectionProps
}

const SearchResultPage: FunctionComponent<SearchResultsPageBlueprintProps> = (props: SearchResultsPageBlueprintProps) => {
    const { query }: QueryParams = useParams();
    const page = useFetch<SearchResultsPageProps>(props.getPage(query));
    return (
        <>
            <MediaSection {...page?.data?.section} />
        </>
    );
}

export default SearchResultPage;