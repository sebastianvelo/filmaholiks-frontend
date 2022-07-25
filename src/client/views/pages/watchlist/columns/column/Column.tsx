import { FunctionComponent } from "react";
import { ItemProps } from "./actionable-item/item/Item";
import ColumnBody, { ColumnBodyProps } from "./body/ColumnBody";
import ColumnHeader, { ColumnHeaderProps } from "./header/ColumnHeader";
import SearchItems from "./search/SearchItems";

export interface ColumnProps extends ColumnHeaderProps, ColumnBodyProps {
    idx: number;
    swap: (target: number) => void;
    addCard: (item: ItemProps) => void;
}

const Column: FunctionComponent<ColumnProps> = (props: ColumnProps) => {
    const onDragOver: React.DragEventHandler<HTMLElement> = (event) => {
        event.preventDefault();
    };

    const onDrop: React.DragEventHandler<HTMLElement> = (event) => {
        event.preventDefault();
        if (event.dataTransfer.getData("item")) {
            const data: ItemProps = JSON.parse(event.dataTransfer.getData("item"));
            props.addCard(data);
        } else if (event.dataTransfer.getData("column")) {
            const target: number = +event.dataTransfer.getData("column");
            props.swap(target);
        }
    };

    const onDragStart: React.DragEventHandler<HTMLDivElement> = (e) => {
        e.dataTransfer.setData("column", `${props.idx}`);
    };

    return (
        <section draggable="true" onDrop={onDrop} onDragStart={onDragStart} onDragOver={onDragOver} className="bg-gradient-to-b from-secondary-dark to-black rounded-sm h-5/6 shadow-2xl max-w-1/3 md:border-l md:border-r md:border-t-4 ">
            <ColumnHeader {...props} />
            <SearchItems addCard={props.addCard} />
            <ColumnBody {...props} />
        </section>
    );
}

export default Column;