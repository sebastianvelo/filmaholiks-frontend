import { AxiosRequestConfig } from "axios";
import Loading from "client/common/components/loading/Loading";
import Tailwind from "client/common/tailwind/Tailwind";
import useFetch from "client/hooks/useFetch";
import SearchBar, { SearchBarProps } from "client/views/components/searchbar/SearchBar";
import { FunctionComponent } from "react";
import CardsSection, { CardsSectionProps } from "../../components/cards-section/CardsSection";

export interface ExplorePageBlueprintProps {
    getPage: () => AxiosRequestConfig<ExplorePageProps>;
}
export interface ExplorePageProps {
    title: string;
    searchbar: SearchBarProps;
    sections: CardsSectionProps[];
}

const ExplorePage: FunctionComponent<ExplorePageBlueprintProps> = (props: ExplorePageBlueprintProps) => {
    const page = useFetch<ExplorePageProps>(props.getPage());
    const className = Tailwind.builder()
        .addIf(`h-screen flex justify-center items-center`, page?.loading)
        .build();
    document.title = page?.data?.title ?? "Loading...";
    return (
        <div className={className}>
            <Loading loading={page?.loading}>
                <SearchBar {...page?.data?.searchbar} />
                <div className="xl:px-28">
                    {page?.data?.sections.map(section => <CardsSection {...section} key={section.title} />)}
                </div>
            </Loading>
        </div>
    );
}

export default ExplorePage;