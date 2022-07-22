import CarouselSection, { CarouselSectionProps } from "client/views/components/carousel-section/CarouselSection";
import ChartSection, { ChartSectionProps } from "client/views/components/chart-section/ChartSection";
import SearchBar, { SearchBarProps } from "client/views/components/searchbar/SearchBar";
import { FunctionComponent } from "react";
import Detail, { DetailProps } from "./detail/Detail";

export interface DetailPageProps {
    title: string;
    detail?: DetailProps,
    searchbar?: SearchBarProps;
    charts?: ChartSectionProps[],
    sections?: CarouselSectionProps[],
}


const DetailPage: FunctionComponent<DetailPageProps> = (props: DetailPageProps) => {
    document.title = props.title;
    return (
        <>
            {props.searchbar && <SearchBar {...props.searchbar} />}
            <section className={`h-full w-full justify-center divide-y-2 divide-primary`}>
                <Detail {...props.detail} />
                {props.charts?.map((chart) => <ChartSection {...chart} key={chart.title} />)}
                {props.sections?.map(section => <CarouselSection {...section} key={section.title} />)}
            </section>
        </>
    );
};

export default DetailPage;