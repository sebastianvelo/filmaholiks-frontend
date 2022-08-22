import CardHorizontal, { CardHorizontalProps } from "client/common/components/card-horizontal/CardHorizontal";
import { FunctionComponent } from "react";

interface ReadOnlyCardsProps {
    items: CardHorizontalProps[];
}

const ReadOnlyCards: FunctionComponent<ReadOnlyCardsProps> = (props: ReadOnlyCardsProps) =>
    <>
        {props.items.map((item: CardHorizontalProps, idx: number) => (
            <div className="h-28">
                <CardHorizontal key={`${item.title}${idx}`} {...item} />
            </div>
        ))}
    </>;

export default ReadOnlyCards;