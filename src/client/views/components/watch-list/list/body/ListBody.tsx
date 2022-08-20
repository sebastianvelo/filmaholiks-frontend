import { FunctionComponent } from "react";
import ActionableCard from "../actionable-item/ActionableCard";
import CardHorizontal, { CardHorizontalProps } from "../../../../../common/components/card-horizontal/CardHorizontal";

export interface ListBodyProps {
    items: CardHorizontalProps[];
    listIdx: number;
    deleteItem: (itemId: string | number, requiresConfirmation?: boolean) => void;
    swapItems: (itemAIdx: number, itemBIdx: number) => void;
    dynamic: boolean;
}

const ActionableItems = (props: ListBodyProps) => (
    <>
        {props.items.map((item: CardHorizontalProps, idx: number) => (
            <ActionableCard
                listIdx={props.listIdx}
                idx={idx}
                swapItems={(idxB: number) => { if (props.swapItems) props.swapItems(idx, idxB) }}
                key={`${item.title}${idx}`}
                item={item}
                action={(requiresConfirmation?: boolean) => props.deleteItem(item.id, requiresConfirmation)}
                delete
            />
        ))}
    </>
);

const StaticItems = (props: ListBodyProps) => (
    <>
        {props.items.map((item: CardHorizontalProps, idx: number) => (
            <div className="h-20">
                <CardHorizontal key={`${item.title}${idx}`} {...item} />
            </div>
        ))}
    </>
);

const ItemsEmpty = () => <p className="text-xl text-center font-bold text-red-500">You haven't added a show yet!</p>

const ListBody: FunctionComponent<ListBodyProps> = (props: ListBodyProps) => (
    <div className="space-y-2 overflow-y-auto h-full text-dark py-4 px-3">
        {props.dynamic ? <ActionableItems {...props} /> : <StaticItems {...props} />}
        {!props.items.length && <ItemsEmpty />}
    </div>
);

export default ListBody;