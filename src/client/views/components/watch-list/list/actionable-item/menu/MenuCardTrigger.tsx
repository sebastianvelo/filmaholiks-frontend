import Action from "client/common/atom/action/Action";
import { DotsHorizontal } from "client/common/components/svg/Svg";
import { FunctionComponent } from "react";

interface MenuCardTriggerProps {
    toggle: () => void;
}

const MenuCardTrigger: FunctionComponent<MenuCardTriggerProps> = (props: MenuCardTriggerProps) => (
    <Action
        className="flex justify-center items-center cursor-context-menu h-full bg-light dark:bg-dark dark:text-white"
        onClick={props.toggle}
    >
        <DotsHorizontal />
    </Action>
)

export default MenuCardTrigger;