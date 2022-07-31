import Action from "client/common/components/action/Action";
import Image from "client/common/components/image/Image";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import Tailwind from "client/common/tailwind/Tailwind";
import WatchlistService from "client/service/WatchlistService";
import { FunctionComponent, useState } from "react";
import Item, { ItemProps } from "./item/Item";

interface ActionableItemProps {
    item: ItemProps;
    action: (requiresConfirmation?: boolean) => void;
    onDrop?: () => void;
    delete?: boolean;
}

const ActionableItem: FunctionComponent<ActionableItemProps> = (props: ActionableItemProps) => {
    const [opened, setOpen] = useState(false);
    const toggle = () => { if (props.delete) setOpen(!opened) };

    const label = props.delete ? "x" : "✓";
    const color = props.delete ? ComponentHovereableColor.DANGER : ComponentHovereableColor.SUCCESS;

    const onDragStart: React.DragEventHandler<HTMLDivElement> = (event) => {
        if (props.delete)
            WatchlistService.setItemFromEvent(event, props.item);
    };

    const onDragEnd: React.DragEventHandler<HTMLDivElement> = () => {
        props.action();
    };

    const action = props.delete ? () => props.action(true) : () => props.action(false);

    const modalClassName = Tailwind.builder()
        .add("fixed place-items-center w-screen h-screen top-0 left-0 bg-black bg-opacity-70 z-50 transition-colors duration-1000")
        .addIf("grid", opened)
        .addIf("hidden bg-opacity-0", !opened)
        .build();

    return (
        <div>
            <div className="flex" draggable={props.delete} onDragStart={onDragStart} onDragEnd={onDragEnd}>
                <div className="w-full" onClick={toggle}>
                    <Item {...props.item} />
                </div>
                <Action onClick={action} label={label} color={color} className="rounded-tr-xl rounded-br-xl" />
            </div>
            <div className={modalClassName}>
                <article className="bg-gradient-to-b from-primary-dark to-primary rounded-tl-xl rounded-bl-xl flex justify-between space-x-4 shadow-lg w-1/2 h-1/2">
                    <Action path={props.item.path} revert>
                        <Image className="h-full rounded-tl-xl rounded-bl-xl" {...props.item.poster} />
                    </Action>
                    <div className="space-y-1 flex flex-col w-full py-2 text-black space-y-4" onClick={toggle}>
                        <Action className={`text-black font-bold overflow-ellipsis text-left text-5xl`} path={props.item.path} label={props.item.title} revert />
                        <p className="text-xl">{props.item.info}</p>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default ActionableItem;