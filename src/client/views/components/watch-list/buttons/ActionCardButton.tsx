import Action from "@atom/action/Action";
import { IconAdd, IconTrash } from "@components/svg/Svg";
import Tailwind from "@tailwind-helper/Tailwind";

export interface ActionCardButtonProps {
    action: (requiresConfirmation?: boolean) => void;
    delete?: boolean;
}

const ActionCardButton: React.FC<ActionCardButtonProps> = (props: ActionCardButtonProps) => {
    const action = props.delete ? () => props.action(true) : () => props.action(false);

    const buttonClasses = Tailwind.builder()
        .add("hidden md:flex justify-center items-center cursor-pointer")
        .add("h-full w-full rounded-br-lg")
        .add("bg-gray-100 dark:bg-gray-800")
        .add("hover:bg-gray-200 dark:hover:bg-gray-700")
        .add("transition-all duration-200")
        .add("shadow-md hover:shadow-lg")
        //.add("border border-gray-200 dark:border-gray-700")
        .add("text-gray-600 dark:text-gray-300")
        .addIf("hover:bg-red-600 dark:hover:bg-red-600 hover:text-gray-200", props.delete)
        .addIf("hover:bg-green-500 dark:hover:bg-green-600 hover:text-gray-200", !props.delete)
        .build();

    return (
        <Action onClick={action} className={buttonClasses} revert>
            {props.delete ? <IconTrash /> : <IconAdd />}
        </Action>
    );
}

export default ActionCardButton;