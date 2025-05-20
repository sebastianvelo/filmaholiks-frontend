import { UseList } from "@hooks/useList";
import CardHorizontalModel from "@model/components/CardHorizontalModel";
import Tailwind from "@tailwind-helper/Tailwind";
import WatchlistHelper from "client/helper/WatchlistHelper";
import ColumnBody from "./body/ColumnBody";
import ColumnHeader from "./header/ColumnHeader";
import WatchlistSearchBar from "./search/WatchlistSearchBar";

export interface WatchlistColumnProps {
    title?: string;
    dynamic?: boolean;
    isEditing?: boolean;
    items: CardHorizontalModel[];
    listIdx: number;
    order: number;
    service: UseList;
}

const WatchlistColumn: React.FC<WatchlistColumnProps> = (props: WatchlistColumnProps) => {
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
        .add("max-h-screen xl:h-screen w-full")
        .add("bg-tertiary-50/70 dark:bg-black/80 backdrop-blur-md")
        .build();

    return (
        <section className={className} onDrop={onDrop} onDragOver={onDragOver}>
            <ColumnHeader {...props.service} {...props} size={props.items.length} />
            {props.dynamic && <WatchlistSearchBar {...props.service} title={props.title} />}
            <ColumnBody {...props.service} {...props} />
        </section >
    );
}

export default WatchlistColumn;