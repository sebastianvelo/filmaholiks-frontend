import Tailwind from "client/common/tailwind/Tailwind";
import WatchlistHelper from "client/helper/WatchlistHelper";
import { FunctionComponent } from "react";
import ListBody, { ListBodyProps } from "./body/ListBody";
import ListFooter, { ListFooterProps } from "./footer/ListFooter";
import ListHeader, { ListHeaderProps } from "./header/ListHeader";
import ListSearchItems, { ListSearchItemsProps } from "./search/ListSearchItems";

export interface ListProps extends ListHeaderProps, ListSearchItemsProps, ListBodyProps, ListFooterProps {
    swapLists: (target: number) => void;
    moveItem: (itemIdx: number, sourceListIdx: number, targetListIdx: number) => void;
}

const List: FunctionComponent<ListProps> = (props: ListProps) => {
    const onDragOver: React.DragEventHandler<HTMLElement> = (event) => {
        event.preventDefault();
    };

    const onDrop: React.DragEventHandler<HTMLElement> = (event) => {
        event.preventDefault();
        WatchlistHelper.fromEvent.item.handleMove(event, props.listIdx, props.moveItem);
        WatchlistHelper.fromEvent.list.swap(event, props.swapLists);
    };

    const className = Tailwind.builder()
        .add("flex flex-col justify-start")
        .add("rounded-sm")
        .add("max-h-screen md:h-screen w-full md:w-96")
        .add("bg-secondary-lighter dark:bg-secondary-dark bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 dark:bg-opacity-90")
        .build();

    return (
        <section className={className} onDrop={onDrop} onDragOver={onDragOver}>
            {props.dynamic && <ListSearchItems {...props} />}
            <ListHeader {...props} size={props.items.length} />
            <ListBody {...props} />
            {props.dynamic && <ListFooter {...props} />}
        </section >
    );
}

export default List;