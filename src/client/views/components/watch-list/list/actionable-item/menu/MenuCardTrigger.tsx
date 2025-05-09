import Action from "@atom/action/Action";
import { IconDotsX } from "@components/svg/Svg";
import ComponentHovereableColor from "@tailwind-helper/constants/ComponentHovereableColor";
import { FunctionComponent } from "react";

interface MenuCardTriggerProps {
    toggle: () => void;
}

const MenuCardTrigger: FunctionComponent<MenuCardTriggerProps> = (props: MenuCardTriggerProps) => (
    <Action
        className="hidden md:flex justify-center items-center cursor-context-menu h-10"
        color={ComponentHovereableColor.NORMAL}
        onClick={props.toggle}
    >
        <IconDotsX />
    </Action>
)

export default MenuCardTrigger;