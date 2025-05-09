import Action from "client/common/atom/action/Action";
import { IconTrash, IconAdd } from "@components/svg/Svg";
import ComponentHovereableColor from "@tailwind-helper/constants/ComponentHovereableColor";
import { FunctionComponent } from "react";

export interface ActionItemProps {
    action: (requiresConfirmation?: boolean) => void;
    delete?: boolean;
}

const ActionCard: FunctionComponent<ActionItemProps> = (props: ActionItemProps) => {
    const color = props.delete ? ComponentHovereableColor.DANGER : ComponentHovereableColor.SUCCESS;
    const action = props.delete ? () => props.action(true) : () => props.action(false);
    
    return (
        <Action onClick={action} color={color} className="flex items-center justify-center h-full" >
            {props.delete ? <IconTrash /> : <IconAdd />}
        </Action>
    );
}

export default ActionCard;