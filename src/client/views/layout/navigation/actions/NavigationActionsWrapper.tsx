import Action from "client/common/components/action/Action";
import ActionProps from "client/common/components/action/ActionProps";
import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";
import Menu, { MenuProps } from "../header/menu/Menu";
import ToggleTheme from "./toggleTheme/ToggleTheme";

export interface NavigationActionsWrapperProps {
    actions?: ActionProps[];
    toggleLinks?: () => void;
    isOpen?: boolean;
    menu?: MenuProps;
}

const NavigationActionsWrapper: FunctionComponent<NavigationActionsWrapperProps> = (props: NavigationActionsWrapperProps) => {
    const className = Tailwind.builder()
        .add("bg-white bg-clip-padding backdrop-filter backdrop-blur-xl sm:backdrop-blur-none bg-opacity-90")
        .add("dark:bg-black dark:bg-opacity-90 sm:dark:bg-transparent")
        .add("flex-col absolute h-screen space-y-4 w-full top-16 left-0")
        .add("sm:top-0 sm:flex sm:space-y-0 sm:h-full sm:flex-row sm:relative sm:px-0 sm:justify-between sm:items-center sm:bg-transparent")
        .addIf("flex", props.isOpen)
        .addIf("hidden", !props.isOpen)
        .build();

    return (
        <div className={className}>
            <div>
                <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4">
                    {props.actions?.map((action) => (
                        <Action
                            className="px-4 py-2 text-2xl text-secondary dark:text-primary hover:text-secondary-dark dark:hover:text-primary-dark"
                            key={action.label}
                            onClick={props.toggleLinks}
                            {...action}
                        />
                    ))}
                </div>
            </div>
            <div className="flex items-center sm:space-x-2">
                <ToggleTheme />
                {props.menu && <Menu {...props.menu} />}
            </div>
        </div>
    );
};

export default NavigationActionsWrapper;
