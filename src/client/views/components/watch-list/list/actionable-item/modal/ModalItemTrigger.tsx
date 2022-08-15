import Action from "client/common/atom/action/Action";
import { ExpandSvg } from "client/common/components/svg/Svg";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { FunctionComponent } from "react";

export interface ModalItemTriggerProps {
    toggle: () => void;
    listIdx?: number;
}

const ModalItemTrigger: FunctionComponent<ModalItemTriggerProps> = (props: ModalItemTriggerProps) => {
    if (props.listIdx === undefined) return <></>;
    return (
        <Action className="flex justify-center items-center cursor-context-menu h-full" onClick={props.toggle} color={ComponentHovereableColor.WARNING}>
            <ExpandSvg />
        </Action>
    );
}

export default ModalItemTrigger;