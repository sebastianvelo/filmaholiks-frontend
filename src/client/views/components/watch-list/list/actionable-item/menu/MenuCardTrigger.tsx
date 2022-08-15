import Action from "client/common/atom/action/Action";
import { DotsHorizontal } from "client/common/components/svg/Svg";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { FunctionComponent } from "react";

interface MenuCardTriggerProps {
    toggle: () => void;
}

const MenuCardTrigger: FunctionComponent<MenuCardTriggerProps> = (props: MenuCardTriggerProps) => (
    <Action
        className="flex justify-center items-center cursor-context-menu h-full"
        color={ComponentHovereableColor.INFO}
        onClick={props.toggle}
    >
        <DotsHorizontal />
    </Action>
)

export default MenuCardTrigger;