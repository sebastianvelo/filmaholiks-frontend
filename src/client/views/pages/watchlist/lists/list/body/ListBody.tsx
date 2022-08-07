import { FunctionComponent } from "react";
import ActionableItem from "../actionable-item/ActionableItem";
import { ItemProps } from "../actionable-item/item/Item";

export interface ListBodyProps {
    items: ItemProps[];
    listIdx: number;
    deleteItem: (idx: number, requiresConfirmation?: boolean) => void;
    swapItems: (itemAIdx: number, itemBIdx: number) => void;
}

const Items = (props: ListBodyProps) => (
    <>
        {props.items.map((item: ItemProps, idx: number) => (
            <ActionableItem
                listIdx={props.listIdx}
                idx={idx}
                swapItems={(idxB: number) => { if (props.swapItems) props.swapItems(idx, idxB) }}
                key={`${item.title}${idx}`}
                item={item}
                action={(requiresConfirmation?: boolean) => props.deleteItem(idx, requiresConfirmation)}
                delete
            />
        ))}
    </>
);

const ItemsEmpty = () => <p className="text-xl text-center font-bold text-red-600">You haven't added a show yet!</p>

const ListBody: FunctionComponent<ListBodyProps> = (props: ListBodyProps) => (
    <div className="space-y-4 overflow-y-auto h-full text-dark p-2">
        <Items {...props} />
        {!props.items.length && <ItemsEmpty />}
    </div>
);

export default ListBody;