import { AxiosRequestConfig } from "axios";
import Loading from "@components/loading/Loading";
import Tailwind from "@tailwind-helper/Tailwind";
import useFetch from "@hooks/useFetch";
import SearchBar, { SearchBarProps } from "client/views/components/common/searchbar/SearchBar";
import { FunctionComponent } from "react";
import ExplorePageBody, { ExplorePageBodyProps } from "./body/ExplorePageBody";

export interface ExplorePageBlueprintProps {
    getPage: () => AxiosRequestConfig<ExplorePageProps>;
}

export interface ExplorePageProps {
    title: string;
    searchbar: SearchBarProps;
    body: ExplorePageBodyProps;
}

const ExplorePage: FunctionComponent<ExplorePageBlueprintProps> = (props: ExplorePageBlueprintProps) => {
    const page = useFetch<ExplorePageProps>(props.getPage());

    document.title = page?.data?.title ?? "Loading...";

    const className = Tailwind.builder()
        .addIf(`h-screen flex justify-center items-center`, page?.loading)
        .build();
        
    return (
        <div className={className}>
            <Loading loading={page?.loading}>
                <SearchBar {...page?.data?.searchbar} />
                <ExplorePageBody {...page?.data?.body} />
            </Loading>
        </div>
    );
}

export default ExplorePage;