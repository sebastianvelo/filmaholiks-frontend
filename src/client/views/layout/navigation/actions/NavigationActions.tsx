import Action from "@atom/action/Action";
import ActionProps from "@atom/action/ActionProps";
import Tailwind from "@tailwind-helper/Tailwind";
import LoggedUserMenu, { LoggedUserMenuProps } from "./menu/LoggedUserMenu";
import ToggleTheme from "./toggleTheme/ToggleTheme";

export interface NavigationActionsProps {
  actions?: ActionProps[];
  isOpen?: boolean;
  menu?: LoggedUserMenuProps;
}

const NavigationActions: React.FC<NavigationActionsProps> = (props: NavigationActionsProps) => {
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
    .add("px-4 py-2 text-xl font-bold")
    .add("text-secondary-800 hover:text-secondary-600")
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
        <div className="absolute bottom-20 left-4 items-center flex xl:relative xl:bottom-0 xl:-left-4 space-x-2">
          {props.menu && <LoggedUserMenu {...props.menu} />}
          <ToggleTheme />
        </div>
      </div>
    </div>
  );
};

export default NavigationActions;