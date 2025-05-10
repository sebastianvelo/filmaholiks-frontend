import Action from "@atom/action/Action";
import { IconDotsX } from "@components/svg/Svg";
import { FunctionComponent } from "react";

interface MenuCardTriggerProps {
    toggle: () => void;
}

const MenuCardTrigger: FunctionComponent<MenuCardTriggerProps> = (props: MenuCardTriggerProps) => (
    <Action className="hidden md:flex justify-center items-center cursor-pointer h-8 w-full rounded-br-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700" onClick={props.toggle}>
        <div className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200" >
            <IconDotsX />
        </div>
    </Action>
)

export default MenuCardTrigger;