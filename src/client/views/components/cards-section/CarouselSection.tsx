import Card, { CardProps } from "client/common/components/card/Card";
import Carousel from "client/common/components/carousel/Carousel";
import Headline from "client/common/components/headline/Headline";
import { FunctionComponent } from "react";

export interface CardsSectionProps {
    id?: string;
    title?: string;
    cards?: CardProps[];
    isGrid?: boolean;
}

const CardsSection: FunctionComponent<CardsSectionProps> = (props: CardsSectionProps) => {
    const skeletonCards = Array(10).fill({ loading: true });
    if (props.cards && !props.cards.length) return <></>;

    const cards = (props.cards ?? skeletonCards)?.map(card => <Card {...card} key={card.title} />);
    return (
        <section className={`px-4 pt-4 bg-gradient-to-t from-black to-secondary-dark space-y-4`} style={{ boxShadow: "0px 0px 5px rgba(250, 236, 167, 1)" }}>
            <Headline className={`text-3xl text-primary-dark`}>{props.title}</Headline>
            <div className={`${props.isGrid ? "block xl:hidden" : ""}`}>
                <Carousel id={props.id!}>{cards}</Carousel>
            </div>
            {props.isGrid && <div className="hidden xl:grid grid-cols-7 gap-y-8 h-screen overflow-y-auto">{cards}</div>}
        </section>
    );
}

export default CardsSection;