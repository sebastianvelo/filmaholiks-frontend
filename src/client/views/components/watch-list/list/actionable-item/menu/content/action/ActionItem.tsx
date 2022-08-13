import Action from "client/common/components/action/Action";
import { TrashSvg, AddSvg } from "client/common/components/svg/Svg";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { FunctionComponent } from "react";

export interface ActionItemProps {
    action: (requiresConfirmation?: boolean) => void;
    delete?: boolean;
}

const ActionItem: FunctionComponent<ActionItemProps> = (props: ActionItemProps) => {
    const color = props.delete ? ComponentHovereableColor.DANGER : ComponentHovereableColor.SUCCESS;
    const action = props.delete ? () => props.action(true) : () => props.action(false);
    
    return (
        <Action onClick={action} color={color} className="flex items-center justify-center h-full" >
            {props.delete ? <TrashSvg /> : <AddSvg />}
        </Action>
    );
}

export default ActionItem;