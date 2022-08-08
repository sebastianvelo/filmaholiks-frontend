import Action from "client/common/components/action/Action";
import { TrashSvg } from "client/common/components/svg/Svg";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import Tailwind from "client/common/tailwind/Tailwind";
import WatchlistService from "client/service/WatchlistService";
import { FunctionComponent } from "react";
import { ItemProps } from "./actionable-item/item/Item";
import ListBody, { ListBodyProps } from "./body/ListBody";
import ListHeader, { ListHeaderProps } from "./header/ListHeader";
import ListSearchItems from "./search/ListSearchItems";

export interface ListProps extends ListHeaderProps, ListBodyProps {
    swapLists: (target: number) => void;
    deleteList: () => void;
    addItem: (item: ItemProps) => void;
    moveItem: (item: ItemProps, sourceListIdx: number, sourceItemIdx: number) => void;
    deleteItemOfOtherList: (listIdx: number, idx: number) => void;
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

    const onDragStart: React.DragEventHandler<HTMLDivElement> = (e) => {
        WatchlistService.fromEvent.list.save(e, props.listIdx);
        const img = new Image();
        e.dataTransfer.setDragImage(img, 0, 0);
    };

    const className = Tailwind.builder()
        .add("bg-gradient-to-t from-black to-secondary-dark border-2 border-primary-dark")
        .add("flex flex-col justify-start")
        .add("rounded-sm")
        .add("h-screen")
        .build();

    const title = `${props.title} (${props.items.length})`;

    return (
        <section className={className} onDrop={onDrop} onDragOver={onDragOver}>
            <ListHeader {...props} onDragStart={onDragStart} title={title} />
            <ListSearchItems addItem={props.addItem} deleteItem={props.deleteItemOfOtherList} />
            <ListBody {...props} />
            <Action className="h-12 w-full flex justify-center items-center" onClick={props.deleteList} color={ComponentHovereableColor.DANGER} revert>
                <TrashSvg />
            </Action>
        </section >
    );
}

export default List;