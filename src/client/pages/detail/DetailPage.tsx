import Container from "client/common/components/container/Container";
import Headline from "client/common/components/headline/Headline";
import CarouselSection, { CarouselSectionProps } from "client/components/carousel-section/CarouselSection";
import Chart, { ChartProps } from "client/components/chart/Chart";
import { FunctionComponent } from "react";
import Detail, { DetailProps } from "./detail/Detail";

export interface DetailPageProps {
    detail?: DetailProps,
    charts?: {
        title: string;
        chart: ChartProps;
    }[],
    sections?: CarouselSectionProps[],
}

const DetailPage: FunctionComponent<DetailPageProps> = (props: DetailPageProps) => (
    <section className={`w-full justify-center divide-y divide-primary`}>
        <Detail {...props.detail} />
        {props.charts?.map((chart) => (
            <Container>
                <Headline>{chart.title}</Headline>
                <Chart {...chart.chart} />
            </Container>
        ))}
        {props.sections?.map(section => <CarouselSection {...section} key={section.title} />)}
    </section>
);

export default DetailPage;