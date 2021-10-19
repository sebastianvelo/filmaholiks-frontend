import Tailwind from "client/common/tailwind/Tailwind";
import Action, { ActionProps } from "client/common/components/action/Action";
import { FunctionComponent } from "react";

export interface NavigationActionsWrapperProps {
    actions?: ActionProps[];
    toggleLinks?: () => void;
    isOpen?: boolean;
}

const NavigationActionsWrapper: FunctionComponent<NavigationActionsWrapperProps> = (props: NavigationActionsWrapperProps) => {
    const className = Tailwind.builder()
        .add('sm:flex flex-col sm:space-y-0 w-full absolute h-screen bg-primary px-2 sm:h-full sm:flex-row sm:relative sm:px-0')
        .addIf('flex', props.isOpen)
        .addIf('hidden', !props.isOpen)
        .build();

    return (
        <div className={className}>
            {props.actions?.map((action) => (
                <Action {...action} key={action.label} onClick={props.toggleLinks} className={'px-4 py-2 mx-2'} />
            ))}
        </div>
    );
};

export default NavigationActionsWrapper;
