import Container from "client/common/components/container/Container";
import Headline from "client/common/components/headline/Headline";
import CarouselSection, { CarouselSectionProps } from "client/views/components/carousel-section/CarouselSection";
import Chart, { ChartProps } from "client/views/components/chart/Chart";
import SearchBar, { SearchBarProps } from "client/views/components/searchbar/SearchBar";
import { FunctionComponent } from "react";
import Detail, { DetailProps } from "./detail/Detail";

export interface DetailPageProps {
    title: string;
    detail?: DetailProps,
    searchbar?: SearchBarProps;
    charts?: {
        title: string;
        chart: ChartProps;
    }[],
    sections?: CarouselSectionProps[],
}


const DetailPage: FunctionComponent<DetailPageProps> = (props: DetailPageProps) => {
    document.title = props.title;
    return (
        <>
            {props.searchbar && <SearchBar {...props.searchbar} />}
            <section className={`h-full w-full justify-center divide-y divide-primary`}>
                <Detail {...props.detail} />
                {props.charts?.map((chart) => (
                    <Container className={`space-y-4`}>
                        <Headline className={`text-3xl`}>{chart.title}</Headline>
                        <Chart {...chart.chart} />
                    </Container>
                ))}
                {props.sections?.map(section => <CarouselSection {...section} key={section.title} />)}
            </section>
        </>
    );
};

export default DetailPage;