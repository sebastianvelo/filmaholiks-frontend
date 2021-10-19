import Tailwind from "client/common/tailwind/Tailwind";
import Action, { ActionProps } from "client/common/components/action/Action";
import { FunctionComponent } from "react";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";

export interface NavigationActionsWrapperProps {
    actions?: ActionProps[];
    toggleLinks?: () => void;
    isOpen?: boolean;
}

const NavigationActionsWrapper: FunctionComponent<NavigationActionsWrapperProps> = (props: NavigationActionsWrapperProps) => {
    const className = Tailwind.builder()
        .add('flex-col w-full absolute h-screen bg-primary px-2 ')
        .add('sm:flex sm:space-y-0 sm:h-full sm:flex-row sm:relative sm:px-0 sm:justify-center')
        .addIf('flex', props.isOpen)
        .addIf('hidden', !props.isOpen)
        .build();

    return (
        <div className={className}>
            {props.actions?.map((action) => (
                <Action {...action} key={action.label} onClick={props.toggleLinks} color={ComponentHovereableColor.PRIMARY} className={'px-4 py-2 mx-2'} />
            ))}
        </div>
    );
};

export default NavigationActionsWrapper;
