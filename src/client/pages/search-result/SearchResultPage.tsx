import { AxiosRequestConfig } from "axios";
import MediaSection, { MediaSectionProps } from "client/components/section/MediaSection";
import { useFetch } from "client/hooks/useFetch";
import { QueryParams } from "client/util/params/Params";
import { FunctionComponent } from "react";
import { useParams } from "react-router";

export interface SearchResultPageBlueprintProps {
    getPage: (query: string) => AxiosRequestConfig<SearchResultPageProps>;
}
export interface SearchResultPageProps {
    results: MediaSectionProps
}

const SearchResultPage: FunctionComponent<SearchResultPageBlueprintProps> = (props: SearchResultPageBlueprintProps) => {
    const { query }: QueryParams = useParams();
    const page = useFetch<SearchResultPageProps>(props.getPage(query));
    return (
        <>
            <MediaSection {...(page?.data?.results ?? { cards: undefined })} />
        </>
    );
}

export default SearchResultPage;