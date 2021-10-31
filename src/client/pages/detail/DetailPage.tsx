import CarouselSection, { CarouselSectionProps } from "client/components/carousel-section/CarouselSection";
import { FunctionComponent } from "react";
import Detail, { DetailProps } from "./detail/Detail";

export interface DetailPageProps {
    detail?: DetailProps,
    sections?: CarouselSectionProps[],
}

const DetailPage: FunctionComponent<DetailPageProps> = (props: DetailPageProps) => (
    <section className={`w-full justify-center divide-y divide-primary`}>
        <Detail {...props.detail} />
        {props.sections?.map(section => <CarouselSection {...section} key={section.title} />)}
    </section>
);

export default DetailPage;