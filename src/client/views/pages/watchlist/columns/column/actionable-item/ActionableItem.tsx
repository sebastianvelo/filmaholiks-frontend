import Action from "client/common/components/action/Action";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { FunctionComponent } from "react";
import Item, { ItemProps } from "../item/Item";

interface ActionableItemProps {
    item: ItemProps;
    action: () => void;
    delete?: boolean;
}

const ActionableItem: FunctionComponent<ActionableItemProps> = (props: ActionableItemProps) => {
    const label = props.delete ? "x" : "✓";
    const color = props.delete ? ComponentHovereableColor.DANGER : ComponentHovereableColor.SUCCESS;
    return (
        <div className="flex">
            <Item {...props.item} />
            <Action onClick={props.action} label={label} color={color} className="rounded-tr-xl rounded-br-xl" />
        </div>
    );
}

export default ActionableItem;