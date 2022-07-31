import WatchlistService from "client/service/WatchlistService";
import { FunctionComponent } from "react";
import { ItemProps } from "./actionable-item/item/Item";
import ColumnBody, { ColumnBodyProps } from "./body/ColumnBody";
import ColumnHeader, { ColumnHeaderProps } from "./header/ColumnHeader";
import SearchItems from "./search/SearchItems";

export interface ColumnProps extends ColumnHeaderProps, ColumnBodyProps {
    idx: number;
    swapColumns: (target: number) => void;
    addCard: (item: ItemProps) => void;
}

const Column: FunctionComponent<ColumnProps> = (props: ColumnProps) => {
    const onDragOver: React.DragEventHandler<HTMLElement> = (event) => {
        event.preventDefault();
    };

    const onDrop: React.DragEventHandler<HTMLElement> = (event) => {
        event.preventDefault();
        WatchlistService.handleAddCard(event, props.addCard);
        WatchlistService.handleSwapColumns(event, props.swapColumns);
    };

    const onDragStart: React.DragEventHandler<HTMLDivElement> = (e) => {
        WatchlistService.setColumnFromEvent(e, props.idx);
    };

    return (
        <section
            className="bg-gradient-to-t from-black to-secondary-dark rounded-sm shadow-2xl h-screen border border-primary-dark flex flex-col justify-start"
            draggable="true"
            onDrop={onDrop}
            onDragStart={onDragStart}
            onDragOver={onDragOver}>
            <SearchItems addCard={props.addCard} />
            <ColumnHeader {...props} />
            <ColumnBody {...props} />
        </section>
    );
}

export default Column;