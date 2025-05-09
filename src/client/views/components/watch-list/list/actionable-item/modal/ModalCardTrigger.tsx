import Action from "client/common/atom/action/Action";
import { IconExpand } from "client/common/components/svg/Svg";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { FunctionComponent } from "react";

export interface ModalCardTriggerProps {
    toggle: () => void;
    listIdx?: number;
}

const ModalCardTrigger: FunctionComponent<ModalCardTriggerProps> = (props: ModalCardTriggerProps) => {
    if (props.listIdx === undefined) return <></>;
    return (
        <Action className="flex justify-center items-center cursor-context-menu h-full" onClick={props.toggle} color={ComponentHovereableColor.WARNING}>
            <IconExpand />
        </Action>
    );
}

export default ModalCardTrigger;