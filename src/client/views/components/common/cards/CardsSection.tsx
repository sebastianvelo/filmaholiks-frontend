import CardVertical from "@components/card-vertical/CardVertical";
import Carousel from "@components/carousel/Carousel";
import { CardsSectionModel } from "@model/components/section/Section";
import Tailwind from "@tailwind-helper/Tailwind";
import CardHorizontal from "client/common/components/card-horizontal/CardHorizontal";
import Section from "../../section/Section";

export interface CardsSectionProps extends CardsSectionModel {}

const CardsSection: React.FC<CardsSectionProps> = (props: CardsSectionProps) => {
    const skeletonCards = Array(10).fill({ loading: true });
    if (props.cards && !props.cards.length) return <></>;

    const cards = (props.cards ?? skeletonCards).map((card, i) => (
        props.horizontal ? <CardHorizontal {...card} key={`card${i}${card.title}`} /> : <CardVertical {...card} key={`card${i}${card.title}`} />
    ));
    const carouselWrapperClassName = Tailwind.builder().add("py-6 px-4").addIf("block xl:hidden", props.isGrid).build();
    const gridClassName = "hidden xl:grid grid-cols-6 place-items-center gap-x-4 gap-y-8 overflow-y-auto shadow-xl scrollbar";

    return (
        <Section title={props.title}>
            {!props.horizontal && (
                <div className={carouselWrapperClassName}>
                    <Carousel id={props.id!}>{cards}</Carousel>
                </div>
            )}
            {props.horizontal && (
                <div className={"max-h-96 overflow-y-auto scrollbar"}>
                    {cards}
                </div>
            )}
            {props.isGrid && (
                <div className={gridClassName}>
                    {cards}
                </div>
            )}
        </Section>
    );
}

export default CardsSection;