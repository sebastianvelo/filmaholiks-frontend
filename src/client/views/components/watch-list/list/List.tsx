import Tailwind from "client/common/tailwind/Tailwind";
import WatchlistHelper from "client/helper/WatchlistHelper";
import { UseList } from "@hooks/useList";
import { FunctionComponent } from "react";
import CardHorizontalModel from "shared/model/components/CardHorizontalModel";
import ListBody from "./body/ListBody";
import ListFooter from "./footer/ListFooter";
import ListHeader from "./header/ListHeader";
import ListSearchItems from "./search/ListSearchItems";

export interface ListProps {
    title?: string;
    dynamic?: boolean;
    items: CardHorizontalModel[];
    listIdx: number;
    order: number;
    service: UseList;
}

const List: FunctionComponent<ListProps> = (props: ListProps) => {
    const onDragOver: React.DragEventHandler<HTMLElement> = (event) => {
        event.preventDefault();
    };

    const onDrop: React.DragEventHandler<HTMLElement> = (event) => {
        event.preventDefault();
        WatchlistHelper.fromEvent.item.handleMove(event, props.listIdx, props.service.moveItem);
        WatchlistHelper.fromEvent.list.swap(event, props.service.swapLists);
    };

    const className = Tailwind.builder()
        .add("flex flex-col justify-start")
        .add("rounded-sm")
        .add("max-h-screen md:h-screen w-full md:w-96")
        .add("bg-secondary-50 dark:bg-secondary-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 dark:bg-opacity-90")
        .build();

    return (
        <section className={className} onDrop={onDrop} onDragOver={onDragOver}>
            <ListHeader {...props.service} {...props} size={props.items.length} />
            {props.dynamic && <ListSearchItems {...props.service} />}
            <ListBody {...props.service} {...props} />
            {props.dynamic && <ListFooter {...props.service} />}
        </section >
    );
}

export default List;