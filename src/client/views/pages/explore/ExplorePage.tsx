import { AxiosRequestConfig } from "axios";
import Loading from "client/common/components/loading/Loading";
import Tailwind from "client/common/tailwind/Tailwind";
import useFetch from "client/hooks/useFetch";
import SearchBar, { SearchBarProps } from "client/views/components/searchbar/SearchBar";
import { FunctionComponent } from "react";
import CarouselSection, { CarouselSectionProps } from "../../components/carousel-section/CarouselSection";

export interface ExplorePageBlueprintProps {
    getPage: () => AxiosRequestConfig<ExplorePageProps>;
}
export interface ExplorePageProps {
    title: string;
    searchbar: SearchBarProps;
    sections: CarouselSectionProps[];
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
                <div className="space-y-4">
                    <SearchBar {...page?.data?.searchbar} />
                    <div className="space-y-4">
                        {page?.data?.sections.map(section => <CarouselSection {...section} key={section.title} />)}
                    </div>
                </div>
            </Loading>
        </div>
    );
}

export default ExplorePage;