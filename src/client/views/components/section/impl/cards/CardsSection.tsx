import CardVertical from "client/common/components/card-vertical/CardVertical";
import Carousel from "client/common/components/carousel/Carousel";
import { CardsSectionModel } from "shared/model/components/section/Section";
import { FunctionComponent } from "react";
import Section from "../../Section";
import Tailwind from "client/common/tailwind/Tailwind";

export interface CardsSectionProps extends CardsSectionModel { }

const CardsSection: FunctionComponent<CardsSectionProps> = (props: CardsSectionProps) => {
    const skeletonCards = Array(10).fill({ loading: true });
    if (props.cards && !props.cards.length) return <></>;

    const cards = (props.cards ?? skeletonCards).map((card, i) => <CardVertical {...card} key={`card${i}${card.title}`} />);
    const carouselWrapperClassName = Tailwind.builder().addIf("block xl:hidden", props.isGrid).build();
    const gridClassName = "hidden xl:grid grid-cols-5 2xl:grid-cols-7 gap-y-8 overflow-y-auto shadow-xl";

    return (
        <Section title={props.title}>
            <div className={carouselWrapperClassName}>
                <Carousel id={props.id!}>{cards}</Carousel>
            </div>
            {props.isGrid && (
                <div className={gridClassName}>
                    {cards}
                </div>
            )}
        </Section>
    );
}

export default CardsSection;