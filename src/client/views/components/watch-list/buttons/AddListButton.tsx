import Action from "@atom/action/Action";
import { IconAdd } from "@components/svg/Svg";
import Tailwind from "client/helper/tailwind/Tailwind";

const actionClasses = Tailwind.builder()
    .add("hidden md:flex justify-center items-center")
    .add("cursor-pointer h-max p-2")
    .add("rounded-lg")
    .add("bg-green-600 dark:bg-green-600")
    .add("hover:bg-green-700 dark:hover:bg-green-700")
    .add("transition-all duration-200")
    .add("shadow-md hover:shadow-lg")
    .add("border border-gray-200 dark:border-gray-700")
    .add("text-gray-200 dark:text-gray-100")
    .build();

export interface AddListButtonProps {
    add: () => void;
}

const AddListButton: React.FC<AddListButtonProps> = (props: AddListButtonProps) => {
    return (
        <Action className={actionClasses} onClick={props.add} revert>
            <IconAdd />
        </Action>
    );
};

export default AddListButton;