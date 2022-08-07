import Action from "client/common/components/action/Action";
import { DotsVertical } from "client/common/components/svg/Svg";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { FunctionComponent } from "react";

interface MenuItemTriggerProps {
    setOpen: (value: boolean) => void;
}

const MenuItemTrigger: FunctionComponent<MenuItemTriggerProps> = (props: MenuItemTriggerProps) => (
    <Action
        className="flex justify-center items-center cursor-context-menu"
        color={ComponentHovereableColor.INFO}
        onClick={() => props.setOpen(true)}
        onMouseLeave={() => props.setOpen(false)}
    >
        <DotsVertical />
    </Action>
)

export default MenuItemTrigger;