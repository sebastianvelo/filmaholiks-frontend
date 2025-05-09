import Action from "@atom/action/Action";
import ActionProps from "@atom/action/ActionProps";
import Tailwind from "@tailwind-helper/Tailwind";
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
    .add('xl:flex-row xl:z-auto xl:opacity-100')
    .addIf('opacity-100', props.isOpen)
    .addIf('opacity-0', !props.isOpen)
    .build();

  const wrapperClassName = Tailwind.builder()
    .add("bg-white/90 bg-clip-padding backdrop-filter backdrop-blur-2xl xl:backdrop-blur-none")
    .add("dark:bg-black/90 xl:dark:bg-transparent")
    .add("flex-col absolute h-screen space-y-4 w-2/3 md:w-1/2 xl:w-full top-18 left-0")
    .add("xl:top-0 xl:flex xl:space-y-0 xl:h-full xl:flex-row xl:relative xl:px-0 xl:justify-between xl:items-center xl:bg-transparent")
    .addIf("flex", props.isOpen)
    .addIf("hidden", !props.isOpen)
    .build();

  const actionClassName = Tailwind.builder()
    .add("px-4 py-2 text-xl")
    .add("text-secondary-700 hover:text-secondary-500")
    .add("dark:text-primary-300 dark:hover:text-primary-500")
    .build();

  return (
    <div className={className}>
      <div className={wrapperClassName}>
        <div className="px-4 xl:pr-2 xl:pl-0 flex flex-col xl:flex-row">
          {props.actions?.map((action: ActionProps) => (
            <Action key={action.label} {...action} className={actionClassName} />
          ))}
        </div>
        <div className="absolute bottom-16 left-4 items-center flex xl:relative xl:bottom-0 xl:left-0">
          <ToggleTheme />
          {props.menu && <NavigationMenu {...props.menu} />}
        </div>
      </div>
    </div>
  );
};

export default NavigationActions;