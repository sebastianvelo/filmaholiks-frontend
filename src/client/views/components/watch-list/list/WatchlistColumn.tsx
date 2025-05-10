import { UseList } from "@hooks/useList";
import CardHorizontalModel from "@model/components/CardHorizontalModel";
import Tailwind from "@tailwind-helper/Tailwind";
import WatchlistHelper from "client/helper/WatchlistHelper";
import { FunctionComponent } from "react";
import ColumnBody from "./body/ColumnBody";
import ColumnFooter from "./footer/ColumnFooter";
import ColumnHeader from "./header/ColumnHeader";
import ColumnSearchbar from "./search/ColumnSearchbar";

export interface WatchlistColumnProps {
    title?: string;
    dynamic?: boolean;
    items: CardHorizontalModel[];
    listIdx: number;
    order: number;
    service: UseList;
}

const WatchlistColumn: FunctionComponent<WatchlistColumnProps> = (props: WatchlistColumnProps) => {
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
        .add("bg-tertiary-50 dark:bg-tertiary-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 dark:bg-opacity-90")
        .build();

    return (
        <section className={className} onDrop={onDrop} onDragOver={onDragOver}>
            <ColumnHeader {...props.service} {...props} size={props.items.length} />
            {props.dynamic && <ColumnSearchbar {...props.service} />}
            <ColumnBody {...props.service} {...props} />
            {props.dynamic && <ColumnFooter {...props.service} />}
        </section >
    );
}

export default WatchlistColumn;