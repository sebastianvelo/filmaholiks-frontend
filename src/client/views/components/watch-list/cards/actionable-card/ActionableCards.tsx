import { CardHorizontalProps } from "@components/card-horizontal/CardHorizontal";
import { FunctionComponent } from "react";
import ActionableCard from "./ActionableCard";

interface ActionableCardsProps {
    items: CardHorizontalProps[];
    listIdx: number;
    deleteItem: (itemId: string | number, requiresConfirmation?: boolean) => void;
    swapItems: (itemAIdx: number, itemBIdx: number) => void;
}

const ActionableCards: FunctionComponent<ActionableCardsProps> = (props: ActionableCardsProps) =>
    <>
        {props.items.map((item: CardHorizontalProps, idx: number) => (
            <ActionableCard
                listIdx={props.listIdx}
                idx={idx}
                key={`${item.title}${idx}`}
                item={item}
                swapItems={(idxB: number) => { if (props.swapItems) props.swapItems(idx, idxB) }}
                action={(requiresConfirmation?: boolean) => props.deleteItem(item.id, requiresConfirmation)}
                delete
            />
        ))}
    </>;

export default ActionableCards;