import Action from "@atom/action/Action";
import ActionProps from "@atom/action/ActionProps";

export interface OptionProps extends ActionProps { }

const LoggedUserMenuOption: React.FC<OptionProps> = (props: OptionProps) => (
    <Action
        className="bg-white mx-2 px-3 py-2 rounded-md text-sm font-bold transition-colors border border-secondary-500 text-secondary-500 dark:border-primary-900 dark:text-white hover:text-white hover:bg-secondary-500 dark:hover:bg-primary-900"
        revert
        {...props}
    >
        {props.label}
    </Action>
);

export default LoggedUserMenuOption;