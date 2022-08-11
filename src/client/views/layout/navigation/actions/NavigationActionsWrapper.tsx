import Action from "client/common/components/action/Action";
import ActionProps from "client/common/components/action/ActionProps";
import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";
import ToggleTheme from "./toggleTheme/ToggleTheme";

export interface NavigationActionsWrapperProps {
    actions?: ActionProps[];
    toggleLinks?: () => void;
    isOpen?: boolean;
}


const NavigationActionsWrapper: FunctionComponent<NavigationActionsWrapperProps> = (props: NavigationActionsWrapperProps) => {
    const className = Tailwind.builder()
        .add("bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 sm:bg-transparent")
        .add("dark:bg-dark dark:bg-opacity-60 sm:dark:bg-transparent")
        .add("flex-col absolute h-screen space-y-4 w-full left-0")
        .add("sm:flex sm:space-y-0 sm:h-full sm:flex-row sm:relative sm:px-0 p-4 sm:items-center")
        .addIf("flex", props.isOpen)
        .addIf("hidden", !props.isOpen)
        .build();

    return (
        <div className={className}>
            {props.actions?.map((action) => (
                <Action
                    className="px-4 py-2 text-2xl text-secondary-dark dark:text-primary hover:text-secondary-dark hover:bg-primary dark:hover:text-primary-dark dark:hover:bg-secondary"
                    key={action.label}
                    onClick={props.toggleLinks}
                    {...action}
                />
            ))}
            <ToggleTheme />
        </div>
    );
};

export default NavigationActionsWrapper;
