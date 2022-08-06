import Action from "client/common/components/action/Action";
import { DragSvg } from "client/common/components/svg/Svg";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import WatchlistService from "client/service/WatchlistService";
import { FunctionComponent } from "react";
import { ItemProps } from "./actionable-item/item/Item";
import ListBody, { ListBodyProps } from "./body/ListBody";
import ListHeader, { ListHeaderProps } from "./header/ListHeader";
import SearchItems from "./search/SearchItems";

export interface ListProps extends ListHeaderProps, ListBodyProps {
    swapLists: (target: number) => void;
    deleteColumn: () => void;
    addItem: (item: ItemProps) => void;
    deleteItemOfOtherList: (listIdx: number, idx: number) => void;
}

const List: FunctionComponent<ListProps> = (props: ListProps) => {
    const onDragOver: React.DragEventHandler<HTMLElement> = (event) => {
        event.preventDefault();
    };

    const onDrop: React.DragEventHandler<HTMLElement> = (event) => {
        event.preventDefault();
        WatchlistService.fromEvent.item.handleSave(event, props.listIdx, props.addItem);
        WatchlistService.fromEvent.list.swap(event, props.swapLists);
    };

    const onDragStart: React.DragEventHandler<HTMLDivElement> = (e) => {
        WatchlistService.fromEvent.list.save(e, props.listIdx);
    };

    return (
        <section
            className="bg-gradient-to-t from-black to-secondary-dark rounded-sm shadow-2xl h-screen flex flex-col justify-start"
            onDrop={onDrop}
            onDragOver={onDragOver}
        >
            <div className="flex">
                <SearchItems addItem={props.addItem} deleteItem={props.deleteItemOfOtherList} />
                <div draggable="true" onDragStart={onDragStart}>
                    <Action className="w-12 h-full flex justify-center items-center cursor-move" color={ComponentHovereableColor.SECONDARY} >
                        <DragSvg />
                    </Action>
                </div>

            </div>
            <ListHeader {...props} />
            <ListBody {...props} />
        </section >
    );
}

export default List;