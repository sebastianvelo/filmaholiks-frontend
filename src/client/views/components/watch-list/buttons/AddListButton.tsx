import Action from "@atom/action/Action";
import { IconAdd } from "@components/svg/Svg";
import Tailwind from "client/helper/tailwind/Tailwind";
import { FunctionComponent } from "react";

const containerClasses = Tailwind.builder()
    .add("top-0 right-0 absolute")
    .add("hidden md:flex justify-center items-center")
    .add("cursor-pointer h-max p-2")
    .add("rounded-tr-lg")
    .add("bg-gray-100 dark:bg-gray-800")
    .add("hover:bg-gray-200 dark:hover:bg-gray-700")
    .add("transition-all duration-200")
    .add("shadow-md hover:shadow-lg")
    .add("border border-gray-200 dark:border-gray-700")
    .build();

const actionClasses = Tailwind.builder()
    .add("text-gray-600 dark:text-gray-100")
    .add("hover:text-green-500 dark:hover:text-green-400")
    .add("transition-colors duration-200")
    .build();

export interface AddListButtonProps {
    add: () => void;
}

const AddListButton: FunctionComponent<AddListButtonProps> = (props: AddListButtonProps) => {
    return (
        <div className={containerClasses}>
            <Action className={actionClasses} onClick={props.add} revert>
                <IconAdd />
            </Action>
        </div>
    );
};

export default AddListButton;