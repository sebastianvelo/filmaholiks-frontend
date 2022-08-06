import { FunctionComponent } from "react";
import ActionableItem from "../actionable-item/ActionableItem";
import { ItemProps } from "../actionable-item/item/Item";

export interface ListBodyProps {
    items: ItemProps[];
    listIdx: number;
    deleteItem: (idx: number, requiresConfirmation?: boolean) => void;
    swapItems: (itemIdx: number, position: number) => void;
}

const Items = (props: ListBodyProps) => (
    <>
        {props.items.map((item: ItemProps, idx: number) => (
            <ActionableItem
                listIdx={props.listIdx}
                idx={idx}
                swapItems={props.swapItems}
                key={`${item.title}${idx}`}
                item={item}
                action={(requiresConfirmation?: boolean) => props.deleteItem(idx, requiresConfirmation)}
                delete
            />
        ))}
    </>
);

const ItemsEmpty = () => <p className="text-xl px-4">You haven't added a show yet!</p>

const ListBody: FunctionComponent<ListBodyProps> = (props: ListBodyProps) => (
    <div className="space-y-4 overflow-y-auto py-4 h-full">
        <Items {...props} />
        {!props.items.length && <ItemsEmpty />}
    </div>
);

export default ListBody;