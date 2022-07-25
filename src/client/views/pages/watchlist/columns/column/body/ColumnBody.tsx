import { FunctionComponent } from "react";
import ActionableItem from "../actionable-item/ActionableItem";
import { ItemProps } from "../actionable-item/item/Item";

export interface ColumnBodyProps {
    items: ItemProps[];
    deleteCard: (idx: number, requiresConfirmation?: boolean) => void;
}

const ColumnBody: FunctionComponent<ColumnBodyProps> = (props: ColumnBodyProps) => (
    <div className="space-y-4 h-96 overflow-y-auto px-2 py-4 border-b border-t-2 border-primary resize-y">
        {props.items.map((item: ItemProps, idx: number) => (
            <ActionableItem
                key={item.title + idx}
                item={item}
                action={(requiresConfirmation?: boolean) => props.deleteCard(idx, requiresConfirmation)}
                delete
            />
        ))}
    </div>
);

export default ColumnBody;