import { AxiosRequestConfig } from "axios";
import SearchBar, { SearchBarProps } from "client/components/searchbar/SearchBar";
import { useFetch } from "client/hooks/useFetch";
import { FunctionComponent } from "react";
import MediaSection, { MediaSectionProps } from "../../components/section/MediaSection";

export interface ExplorePageBlueprintProps {
    getPage: () => AxiosRequestConfig<ExplorePageProps>;
}
export interface ExplorePageProps {
    searchbar: SearchBarProps;
    sections: MediaSectionProps[];
}

const ExplorePage: FunctionComponent<ExplorePageBlueprintProps> = (props: ExplorePageBlueprintProps) => {
    const page = useFetch<ExplorePageProps>(props.getPage());
    const skeletonSections = Array(3).fill({ cards: null });
    return (
        <>
            {page?.data?.searchbar && <SearchBar {...page.data.searchbar} />}
            {(page?.data?.sections ?? skeletonSections).map(section => <MediaSection {...section} key={section.title} />)}
        </>
    );
}

export default ExplorePage;