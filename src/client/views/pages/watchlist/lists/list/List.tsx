import WatchlistService from "client/service/WatchlistService";
import { FunctionComponent } from "react";
import { ItemProps } from "./actionable-item/item/Item";
import ListBody, { ListBodyProps } from "./body/ListBody";
import ListHeader, { ListHeaderProps } from "./header/ListHeader";
import SearchItems from "./search/SearchItems";

export interface ListProps extends ListHeaderProps, ListBodyProps {
    idx: number;
    swapLists: (target: number) => void;
    addCard: (item: ItemProps) => void;
}

const List: FunctionComponent<ListProps> = (props: ListProps) => {
    const onDragOver: React.DragEventHandler<HTMLElement> = (event) => {
        event.preventDefault();
    };

    const onDrop: React.DragEventHandler<HTMLElement> = (event) => {
        event.preventDefault();
        WatchlistService.handleAddCard(event, props.addCard);
        WatchlistService.handleSwapColumns(event, props.swapLists);
    };

    const onDragStart: React.DragEventHandler<HTMLDivElement> = (e) => {
        WatchlistService.setColumnFromEvent(e, props.idx);
    };

    return (
        <section
            className="bg-gradient-to-t from-black to-secondary-dark rounded-sm shadow-2xl h-screen flex flex-col justify-start border border-primary-dark"
            onDrop={onDrop}>
            <SearchItems addCard={props.addCard} />
            <ListHeader {...props} />
            <ListBody {...props} onDragOver={onDragOver} onDragStart={onDragStart} />
        </section>
    );
}

export default List;