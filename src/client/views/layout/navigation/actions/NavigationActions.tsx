import Action from "client/common/components/action/Action";
import ActionProps from "client/common/components/action/ActionProps";
import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";
import NavigationMenu, { MenuProps } from "./menu/NavigationMenu";
import ToggleTheme from "./toggleTheme/ToggleTheme";

export interface NavigationActionsProps {
  actions?: ActionProps[];
  toggleLinks?: () => void;
  isOpen?: boolean;
  menu?: MenuProps;
}

const NavigationActions: FunctionComponent<NavigationActionsProps> = (props: NavigationActionsProps) => {
  const className = Tailwind.builder()
    .add('flex h-full w-full transition-all duration-400 z-40 w-full')
    .add('sm:flex-row sm:z-auto sm:opacity-100')
    .addIf('opacity-100', props.isOpen)
    .addIf('opacity-0', !props.isOpen)
    .build();

  const wrapperClassName = Tailwind.builder()
    .add("bg-white bg-clip-padding backdrop-filter backdrop-blur-xl sm:backdrop-blur-none bg-opacity-70")
    .add("dark:bg-black dark:bg-opacity-90 sm:dark:bg-transparent")
    .add("flex-col absolute h-screen space-y-4 w-full top-18 left-0")
    .add("sm:top-0 sm:flex sm:space-y-0 sm:h-full sm:flex-row sm:relative sm:px-0 sm:justify-between sm:items-center sm:bg-transparent")
    .addIf("flex", props.isOpen)
    .addIf("hidden", !props.isOpen)
    .build();

  const actionClassName = Tailwind.builder()
    .add("px-4 py-2 text-2xl")
    .add("text-secondary-dark hover:text-secondary")
    .add("dark:text-primary dark:hover:text-primary-dark")
    .build();
    
  return (
    <div className={className}>
      <div className={wrapperClassName}>
        <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4">
          {props.actions?.map((action: ActionProps) => (
            <Action
              className={actionClassName}
              key={action.label}
              onClick={props.toggleLinks}
              {...action}
            />
          ))}
        </div>
        <div className="flex items-center sm:space-x-2">
          <ToggleTheme />
          {props.menu && <NavigationMenu {...props.menu} />}
        </div>
      </div>
    </div>
  );
};

export default NavigationActions;
