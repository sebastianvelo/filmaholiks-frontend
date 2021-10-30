import Card, { CardProps } from "client/common/components/card/Card";
import Carousel from "client/common/components/carousel/Carousel";
import Headline from "client/common/components/headline/Headline";
import { FunctionComponent } from "react";
export interface MediaSectionProps  {
    id?: string;
    title?: string;
    cards?: CardProps[];
}

const MediaSection: FunctionComponent<MediaSectionProps> = (props: MediaSectionProps) => {
    return (
        <section className={`px-4 pt-4`}>
            <Headline className={`text-3xl`}>{props.title}</Headline>
            <Carousel id={props.id!}>
                {props.cards?.map(card => <Card {...card} key={card.title} />)}
            </Carousel>
        </section>
    );
}

export default MediaSection;