import { AxiosRequestConfig } from "axios";
import Loading from "client/common/components/loading/Loading";
import Tailwind from "client/common/tailwind/Tailwind";
import SearchBar, { SearchBarProps } from "client/components/searchbar/SearchBar";
import useFetch from "client/hooks/useFetch";
import { FunctionComponent } from "react";
import CarouselSection, { CarouselSectionProps } from "../../components/carousel-section/CarouselSection";

export interface ExplorePageBlueprintProps {
    getPage: () => AxiosRequestConfig<ExplorePageProps>;
}
export interface ExplorePageProps {
    searchbar: SearchBarProps;
    sections: CarouselSectionProps[];
}

const ExplorePage: FunctionComponent<ExplorePageBlueprintProps> = (props: ExplorePageBlueprintProps) => {
    const page = useFetch<ExplorePageProps>(props.getPage());
    const className = Tailwind.builder()
        .addIf(`h-screen flex justify-center items-center`, page?.loading)
        .build();
    return (
        <div className={className}>
            <Loading loading={page?.loading}>
                <SearchBar {...page?.data?.searchbar} />
                {page?.data?.sections.map(section => <CarouselSection {...section} key={section.title} />)}
            </Loading>
        </div>
    );
}

export default ExplorePage;