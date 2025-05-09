import { FunctionComponent } from "react";
import { CardHorizontalProps } from "@components/card-horizontal/CardHorizontal";
import ActionableCards from "./actionable/ActionableCards";
import EmptyCards from "./empty/EmptyCards";
import ReadOnlyCards from "./read-only/ReadOnlyCards";

export interface ListBodyProps {
    items: CardHorizontalProps[];
    listIdx: number;
    deleteItem: (itemId: string | number, requiresConfirmation?: boolean) => void;
    swapItems: (itemAIdx: number, itemBIdx: number) => void;
    dynamic?: boolean;
}

const ListBody: FunctionComponent<ListBodyProps> = (props: ListBodyProps) => (
    <div className="space-y-2 overflow-y-auto h-full text-dark px-2">
        {props.dynamic ? <ActionableCards {...props} /> : <ReadOnlyCards {...props} />}
        {!props.items.length && <EmptyCards />}
    </div>
);

export default ListBody;