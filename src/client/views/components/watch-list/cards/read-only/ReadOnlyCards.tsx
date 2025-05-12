import CardHorizontal, { CardHorizontalProps } from "@components/card-horizontal/CardHorizontal";

interface ReadOnlyCardsProps {
    items: CardHorizontalProps[];
}

const ReadOnlyCards: React.FC<ReadOnlyCardsProps> = (props: ReadOnlyCardsProps) =>
    <>
        {props.items.map((item: CardHorizontalProps, idx: number) => (
            <div className="h-20" key={item.id}>
                <CardHorizontal key={`${item.title}${idx}`} {...item} />
            </div>
        ))}
    </>;

export default ReadOnlyCards;