import Card, { CardProps } from "client/common/components/card/Card";
import Carousel from "client/common/components/carousel/Carousel";
import Headline from "client/common/components/headline/Headline";
import Skeleton from "client/common/components/skeleton/Skeleton";
import { FunctionComponent } from "react";

export interface CarouselSectionProps  {
    id?: string;
    title?: string;
    cards?: CardProps[];
}

const CarouselSection: FunctionComponent<CarouselSectionProps> = (props: CarouselSectionProps) => {
    const skeletonCards = Array(10).fill({loading: true});
    return (
        <section className={`px-4 pt-4`}>
            <Skeleton loading={!props.cards} className={`h-8 w-32`}>
                <Headline className={`text-3xl`}>{props.title}</Headline>
            </Skeleton>
            <Carousel id={props.id!}>
                {(props.cards ?? skeletonCards)?.map(card => <Card {...card} key={card.title} />)}
            </Carousel>
        </section>
    );
}

export default CarouselSection;