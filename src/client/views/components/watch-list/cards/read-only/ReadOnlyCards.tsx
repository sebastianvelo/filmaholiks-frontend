import CardHorizontal, { CardHorizontalProps } from "@components/card-horizontal/CardHorizontal";

interface ReadOnlyCardsProps {
    items: CardHorizontalProps[];
}

const ReadOnlyCards: React.FC<ReadOnlyCardsProps> = (props: ReadOnlyCardsProps) =>
    <>
        {props.items.map((item: CardHorizontalProps, idx: number) => (
            <div className="h-20">
                <CardHorizontal key={`${item.title}${idx}`} {...item} />
            </div>
        ))}
    </>;

export default ReadOnlyCards;