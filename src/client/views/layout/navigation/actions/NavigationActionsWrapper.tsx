import Action from "client/common/components/action/Action";
import ActionProps from "client/common/components/action/ActionProps";
import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";

export interface NavigationActionsWrapperProps {
    actions?: ActionProps[];
    toggleLinks?: () => void;
    isOpen?: boolean;
}

const NavigationActionsWrapper: FunctionComponent<NavigationActionsWrapperProps> = (props: NavigationActionsWrapperProps) => {
    const className = Tailwind.builder()
        .add("bg-gradient-to-tl from-secondary-dark to-black sm:from-transparent sm:to-transparent")
        .add("flex-col w-full absolute h-screen px-2 space-y-4")
        .add("sm:flex sm:space-y-0 sm:h-full sm:flex-row sm:relative sm:px-0 p-4")
        .addIf("flex", props.isOpen)
        .addIf("hidden", !props.isOpen)
        .build();

    return (
        <div className={className}>
            {props.actions?.map((action) => (
                <Action
                    className={'px-4 py-2 mx-2 text-2xl text-primary hover:text-secondary-dark hover:bg-primary'}
                    key={action.label}
                    onClick={props.toggleLinks}
                    {...action}
                />
            ))}
        </div>
    );
};

export default NavigationActionsWrapper;
