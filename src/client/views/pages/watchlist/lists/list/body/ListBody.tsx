import { FunctionComponent } from "react";
import ActionableItem from "../actionable-item/ActionableItem";
import { ItemProps } from "../actionable-item/item/Item";

export interface ListBodyProps {
    items: ItemProps[];
    deleteCard: (idx: number, requiresConfirmation?: boolean) => void;
    onDragStart: React.DragEventHandler<HTMLDivElement>;
    onDragOver: React.DragEventHandler<HTMLElement>;
}

const Items = (props: ListBodyProps) => (
    <>
        {props.items.map((item: ItemProps, idx: number) => (
            <ActionableItem
                key={`${item.title}${idx}`}
                item={item}
                action={(requiresConfirmation?: boolean) => props.deleteCard(idx, requiresConfirmation)}
                delete
            />
        ))}
    </>
);

const ItemsEmpty = () => <p className="text-xl px-4">You haven't added a show yet!</p>

const ListBody: FunctionComponent<ListBodyProps> = (props: ListBodyProps) => (
    <div
        draggable="true"
        className="space-y-4 overflow-y-auto px-2 py-4 cursor-move h-full"
        onDragStart={props.onDragStart}
        onDragOver={props.onDragOver}
    >
        <Items {...props} />
        {!props.items.length && <ItemsEmpty />}
    </div>
);

export default ListBody;