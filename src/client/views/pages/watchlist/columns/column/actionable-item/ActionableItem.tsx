import Action from "client/common/components/action/Action";
import Image from "client/common/components/image/Image";
import Pill from "client/common/components/pill/Pill";
import ComponentColor from "client/common/tailwind/constants/ComponentColor";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import Tailwind from "client/common/tailwind/Tailwind";
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
    const toggle = () => setOpen(!opened);

    const label = props.delete ? "x" : "✓";
    const color = props.delete ? ComponentHovereableColor.DANGER : ComponentHovereableColor.SUCCESS;

    const onDragStart: React.DragEventHandler<HTMLDivElement> = (e) => {
        e.dataTransfer.setData("item", JSON.stringify(props.item));
    };

    const onDragEnd: React.DragEventHandler<HTMLDivElement> = () => {
        props.action();
    };

    const action = props.delete ? () => props.action(true) : () => props.action(false);

    const modalClassName = Tailwind.builder().add("fixed w-screen h-screen top-0 left-0 bg-black z-50").addIf("flex", opened).addIf("hidden", !opened).build();
    return (
        <div>
            <div className="flex" draggable="true" onDragStart={onDragStart} onDragEnd={onDragEnd} onClick={toggle}>
                <Item {...props.item} />
                <Action onClick={action} label={label} color={color} className="rounded-tr-xl rounded-br-xl" />
            </div>
            <div className={modalClassName} onClick={toggle}>
                <article draggable="true" className="bg-gradient-to-tr from-primary-light to-light rounded-tl-xl rounded-bl-xl flex justify-between space-x-4 shadow-lg w-full">
                    <Action path={props.item.path} revert>
                        <Image className="h-24 w-20 rounded-tl-xl rounded-bl-xl" {...props.item.poster} />
                    </Action>
                    <div className="space-y-1 flex flex-col justify-between w-full py-2 text-black">
                        <Action className={`text-black font-bold overflow-ellipsis text-left`} path={props.item.path} label={props.item.title} revert />
                        <p className="text-xs">{props.item.info}</p>
                        <Pill color={ComponentColor.SECONDARY}>{props.item.category}</Pill>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default ActionableItem;