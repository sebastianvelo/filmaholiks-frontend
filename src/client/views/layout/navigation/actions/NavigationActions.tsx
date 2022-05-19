import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";
import NavigationActionsWrapper, { NavigationActionsWrapperProps } from "./NavigationActionsWrapper";

export interface NavigationActionsProps extends NavigationActionsWrapperProps {
}

const NavigationActions: FunctionComponent<NavigationActionsProps> = (props: NavigationActionsProps) => {
  const className = Tailwind.builder()
    .add('sm:opacity-100 flex flex-col sm:flex-row space-y-2 pt-2 space-x-6 items-center w-full transition-all duration-400 z-40 sm:z-auto')
    .addIf('opacity-95', props.isOpen)
    .addIf('opacity-0', !props.isOpen)
    .build();

  return (
    <div className={className}>
      <NavigationActionsWrapper {...props} />
    </div>
  );
};

export default NavigationActions;
