import Action from "@atom/action/Action";
import ActionProps from "@atom/action/ActionProps";
import Tailwind from "@tailwind-helper/Tailwind";

export interface OptionProps extends ActionProps { }

const LoggedUserMenuOption: React.FC<OptionProps> = (props: OptionProps) => {
    const optionClasses = Tailwind.builder()
        .add("px-3 py-2")
        .add("rounded-md")
        .add("text-sm font-bold")
        .add("duration-500 transition-colors")
        .add("bg-white dark:bg-black")
        .add("border border-secondary-800 dark:border-primary-500")
        .add("text-secondary-800 dark:text-primary-500")
        .add("hover:text-white dark:hover:text-white")
        .add("hover:bg-secondary-800 dark:hover:bg-primary-500")
        .build();

    return (
        <Action className={optionClasses} revert {...props}>
            {props.label}
        </Action>
    );
};

export default LoggedUserMenuOption;