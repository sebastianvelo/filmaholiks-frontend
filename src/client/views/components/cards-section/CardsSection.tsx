import Card, { CardProps } from "client/common/components/card/Card";
import Carousel from "client/common/components/carousel/Carousel";
import { FunctionComponent } from "react";
import Section from "../section/Section";

export interface CardsSectionProps {
    id?: string;
    title?: string;
    cards?: CardProps[];
    isGrid?: boolean;
}

const CardsSection: FunctionComponent<CardsSectionProps> = (props: CardsSectionProps) => {
    const skeletonCards = Array(10).fill({ loading: true });
    if (props.cards && !props.cards.length) return <></>;

    const cards = (props.cards ?? skeletonCards)?.map((card, i) => <Card {...card} key={`card${i}${card.title}`} />);
    return (
        <Section title={props.title}>
            <div className={`${props.isGrid ? "block xl:hidden" : ""}`}>
                <Carousel id={props.id!}>{cards}</Carousel>
            </div>
            {props.isGrid && <div className="hidden xl:grid grid-cols-5 2xl:grid-cols-7 gap-y-8 overflow-y-auto">{cards}</div>}
        </Section>
    );
}

export default CardsSection;