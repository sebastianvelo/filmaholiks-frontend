import Card, { CardProps } from "client/common/components/card/Card";
import Carousel from "client/common/components/carousel/Carousel";
import Headline from "client/common/components/headline/Headline";
import { FunctionComponent } from "react";

export interface CarouselSectionProps {
    id?: string;
    title?: string;
    cards?: CardProps[];
}

const CarouselSection: FunctionComponent<CarouselSectionProps> = (props: CarouselSectionProps) => {
    const skeletonCards = Array(10).fill({ loading: true });
    if (props.cards && !props.cards.length) return <></>;
    return (
        <section className={`px-4 pt-4 bg-gradient-to-t from-black to-secondary-dark`} style={{boxShadow: "0px 0px 5px rgba(250, 236, 167, 1)"}}>
            <Headline className={`text-3xl text-primary-dark`}>{props.title}</Headline>
            <Carousel id={props.id!}>
                {(props.cards ?? skeletonCards)?.map(card => <Card {...card} key={card.title} />)}
            </Carousel>
        </section>
    );
}

export default CarouselSection;