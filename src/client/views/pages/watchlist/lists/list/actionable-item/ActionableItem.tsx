import WatchlistService from "client/service/WatchlistService";
import { FunctionComponent, useState } from "react";
import ActionItem, { ActionItemProps } from "./action/ActionItem";
import DragItem, { DragItemProps } from "./drag/DragItem";
import Item, { ItemProps } from "./item/Item";
import ModalItem from "./modal/ModalItem";
import ModalItemTrigger from "./modal/ModalItemTrigger";

interface ActionableItemProps extends ActionItemProps, DragItemProps {
    item: ItemProps;
    idx: number;
    swapItems?: (itemIdx: number, position: number) => void;
    onDrop?: () => void;
}

const ActionableItem: FunctionComponent<ActionableItemProps> = (props: ActionableItemProps) => {
    const [opened, setOpen] = useState(false);

    const getImage = () => {
        const image = new Image(200, 100);
        image.src = props.item.poster?.src ?? "";
        return image;
    }

    const onDragStart: React.DragEventHandler<HTMLDivElement> = (event) => {
        if (props.delete) {
            WatchlistService.fromEvent.item.save(event, props.item, props.idx, props.listIdx);
            event.dataTransfer.setDragImage(getImage(), 100, 100)
        }
    };

    const onDragEnd: React.DragEventHandler<HTMLDivElement> = (event) => {
        const targetListIdx = WatchlistService.fromEvent.list.retrieveIdx(event);
        if (props.delete || (!props.delete && targetListIdx !== props.listIdx))
            props.action();
    };

    const onDrop = (event: any) => {
        event.preventDefault();

        if (props.swapItems) {
            const idx = WatchlistService.fromEvent.item.retrieveIdx(event);
            props.swapItems(idx, props.idx);
        }
    };

    const toggle = () => { if (props.delete) setOpen(!opened) };

    return (
        <>
            <div className="flex flex-col w-full" onDrop={onDrop}>
                <div className="flex">
                    <Item {...props.item} />
                    <div className="flex flex-col justify-center">
                        <DragItem {...props} onDragStart={onDragStart} onDragEnd={onDragEnd} />
                        <ModalItemTrigger {...props} toggle={toggle} />
                    </div>
                </div>
                <ActionItem {...props} />
            </div>
            <ModalItem opened={opened} toggle={toggle} item={props.item} />
        </>
    );
}

export default ActionableItem;