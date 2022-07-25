import Action from "client/common/components/action/Action";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { FunctionComponent } from "react";
import Item, { ItemProps } from "./item/Item";

interface ActionableItemProps {
    item: ItemProps;
    action: (requiresConfirmation?: boolean) => void;
    onDrop?: () => void;
    delete?: boolean;
}

const ActionableItem: FunctionComponent<ActionableItemProps> = (props: ActionableItemProps) => {
    const label = props.delete ? "x" : "✓";
    const color = props.delete ? ComponentHovereableColor.DANGER : ComponentHovereableColor.SUCCESS;
    const onDragStart: React.DragEventHandler<HTMLDivElement> = (e) => {
        e.dataTransfer.setData("item", JSON.stringify(props.item));
    };

    const onDragEnd: React.DragEventHandler<HTMLDivElement> = () => {
        props.action();
    };

    const action = props.delete ? () => props.action(true) : () => props.action(false);

    return (
        <div className="flex" draggable="true" onDragStart={onDragStart} onDragEnd={onDragEnd}>
            <Item {...props.item} />
            <Action onClick={action} label={label} color={color} className="rounded-tr-xl rounded-br-xl" />
        </div>
    );
}

export default ActionableItem;