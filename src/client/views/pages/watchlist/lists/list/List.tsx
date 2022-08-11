import Tailwind from "client/common/tailwind/Tailwind";
import WatchlistService from "client/service/WatchlistService";
import { FunctionComponent } from "react";
import { ItemProps } from "./actionable-item/item/Item";
import ListBody, { ListBodyProps } from "./body/ListBody";
import ListFooter, { ListFooterProps } from "./footer/ListFooter";
import ListHeader, { ListHeaderProps } from "./header/ListHeader";
import ListSearchItems, { ListSearchItemsProps } from "./search/ListSearchItems";

export interface ListProps extends ListHeaderProps, ListSearchItemsProps, ListBodyProps, ListFooterProps {
    swapLists: (target: number) => void;
    moveItem: (item: ItemProps, sourceListIdx: number, sourceItemIdx: number) => void;
}

const List: FunctionComponent<ListProps> = (props: ListProps) => {
    const onDragOver: React.DragEventHandler<HTMLElement> = (event) => {
        event.preventDefault();
    };

    const onDrop: React.DragEventHandler<HTMLElement> = (event) => {
        event.preventDefault();
        WatchlistService.fromEvent.item.handleMove(event, props.listIdx, props.moveItem);
        WatchlistService.fromEvent.list.swap(event, props.swapLists);
    };

    const className = Tailwind.builder()
        .add("flex flex-col justify-start")
        .add("rounded-sm")
        .add("max-h-screen md:h-screen w-full md:w-96")
        .add("border-secondary dark:border-primary-light border-t-8 rounded-xl")
        .add("bg-white dark:bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 dark:bg-opacity-90")
        .build();

    return (
        <section className={className} onDrop={onDrop} onDragOver={onDragOver}>
            <ListHeader {...props} size={props.items.length} />
            <ListSearchItems addItem={props.addItem} deleteItemOfOtherList={props.deleteItemOfOtherList} />
            <ListBody {...props} />
            <ListFooter {...props} />
        </section >
    );
}

export default List;