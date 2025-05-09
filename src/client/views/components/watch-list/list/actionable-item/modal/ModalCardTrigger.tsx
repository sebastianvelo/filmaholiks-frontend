import Action from "@atom/action/Action";
import { IconExpand } from "@components/svg/Svg";
import ComponentHovereableColor from "@tailwind-helper/constants/ComponentHovereableColor";
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