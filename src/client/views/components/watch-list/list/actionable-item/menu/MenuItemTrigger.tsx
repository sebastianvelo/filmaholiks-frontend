import Action from "client/common/atom/action/Action";
import { DotsHorizontal } from "client/common/components/svg/Svg";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { FunctionComponent } from "react";

interface MenuItemTriggerProps {
    toggle: () => void;
}

const MenuItemTrigger: FunctionComponent<MenuItemTriggerProps> = (props: MenuItemTriggerProps) => (
    <Action
        className="flex justify-center items-center cursor-context-menu h-full"
        color={ComponentHovereableColor.INFO}
        onClick={props.toggle}
    >
        <DotsHorizontal />
    </Action>
)

export default MenuItemTrigger;