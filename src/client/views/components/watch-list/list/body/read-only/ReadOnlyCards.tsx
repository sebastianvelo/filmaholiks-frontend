import CardHorizontal, { CardHorizontalProps } from "@components/card-horizontal/CardHorizontal";
import { FunctionComponent } from "react";

interface ReadOnlyCardsProps {
    items: CardHorizontalProps[];
}

const ReadOnlyCards: FunctionComponent<ReadOnlyCardsProps> = (props: ReadOnlyCardsProps) =>
    <>
        {props.items.map((item: CardHorizontalProps, idx: number) => (
            <div className="h-20">
                <CardHorizontal key={`${item.title}${idx}`} {...item} />
            </div>
        ))}
    </>;

export default ReadOnlyCards;