import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";
import NavigationActionsWrapper, { NavigationActionsWrapperProps } from "./NavigationActionsWrapper";

export interface NavigationActionsProps extends NavigationActionsWrapperProps {
}

const NavigationActions: FunctionComponent<NavigationActionsProps> = (props: NavigationActionsProps) => {
  const className = Tailwind.builder()
    .add('flex space-y-2 pr-4 pt-2 space-x-6 h-full w-full transition-all duration-400 z-40 w-full')
    .add('sm:flex-row sm:z-auto sm:opacity-100')
    .addIf('opacity-100', props.isOpen)
    .addIf('opacity-0', !props.isOpen)
    .build();


  return (
    <div className={className}>
      <NavigationActionsWrapper {...props} />
    </div>
  );
};

export default NavigationActions;
