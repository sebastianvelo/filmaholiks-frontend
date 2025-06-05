import Action from "@atom/action/Action";
import ActionProps from "@atom/action/ActionProps";
import Tailwind from "@tailwind-helper/Tailwind";

interface OptionProps extends ActionProps {
    onClick?: () => void;
}

const LoggedUserMenuOption: React.FC<OptionProps> = (props: OptionProps) => {
    const optionClasses = Tailwind.builder()
        .add("w-full px-3 py-2.5")
        .add("rounded-lg")
        .add("text-sm font-medium")
        .add("text-gray-100 dark:text-gray-200")
        .add("transition-all duration-200 ease-out")
        .add("hover:bg-primary-700/50 dark:hover:bg-primary-700/50")
        .add("hover:text-white dark:hover:text-white")
        .add("active:scale-95")
        .add("flex items-center justify-between")
        .add("group")
        .build();

    const iconClasses = Tailwind.builder()
        .add("w-4 h-4")
        .add("text-gray-400 dark:text-gray-500")
        .add("group-hover:text-gray-600 dark:group-hover:text-gray-300")
        .add("transition-colors duration-200")
        .build();

    return (
        <Action className={optionClasses} revert {...props}>
            <span>{props.label}</span>
            <div className={iconClasses}>
                →
            </div>
        </Action>
    );
};

export default LoggedUserMenuOption;