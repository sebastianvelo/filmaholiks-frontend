import Action from "client/common/components/action/Action";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import WatchlistService from "client/service/WatchlistService";
import { FunctionComponent, useState } from "react";
import Item, { ItemProps } from "./item/Item";
import ActionableItemModal from "./modal/ActionableItemModal";

interface ActionableItemProps {
    item: ItemProps;
    action: (requiresConfirmation?: boolean) => void;
    onDrop?: () => void;
    delete?: boolean;
}

const ActionableItem: FunctionComponent<ActionableItemProps> = (props: ActionableItemProps) => {
    const [opened, setOpen] = useState(false);

    const onDragStart: React.DragEventHandler<HTMLDivElement> = (event) => {
        if (props.delete)
            WatchlistService.setItemFromEvent(event, props.item);
    };

    const onDragEnd: React.DragEventHandler<HTMLDivElement> = () => {
        props.action();
    };

    const toggle = () => { if (props.delete) setOpen(!opened) };

    const label = props.delete ? "x" : "✓";
    const color = props.delete ? ComponentHovereableColor.DANGER : ComponentHovereableColor.SUCCESS;
    const action = props.delete ? () => props.action(true) : () => props.action(false);

    return (
        <div className="cursor-default">
            <div className="flex" draggable={props.delete} onDragStart={onDragStart} onDragEnd={onDragEnd}>
                <div className="w-full" onClick={toggle}>
                    <Item {...props.item} />
                </div>
                <Action onClick={action} label={label} color={color} className="rounded-tr-xl rounded-br-xl" />
            </div>
            <ActionableItemModal opened={opened} toggle={toggle} item={props.item} />
        </div>
    );
}

export default ActionableItem;