import Action from "@atom/action/Action";
import { IconTrash } from "@components/svg/Svg";
import Tailwind from "client/helper/tailwind/Tailwind";
import { FunctionComponent } from "react";

const buttonClasses = Tailwind.builder()
    .add("hidden md:flex justify-center items-center cursor-pointer")
    .add("w-full rounded-br-lg")
    .add("bg-gray-100 dark:bg-gray-800")
    .add("hover:bg-gray-200 dark:hover:bg-gray-700")
    .add("transition-all duration-200")
    .add("shadow-md hover:shadow-lg")
    .add("border border-gray-200 dark:border-gray-700")
    .add("text-gray-600 dark:text-gray-300")
    .add("hover:bg-red-600 dark:hover:bg-red-600 hover:text-gray-200 h-full")
    .add("p-2")
    .build();


export interface DeleteListButtonProps {
    deleteList: () => void;
}

const DeleteListButton: FunctionComponent<DeleteListButtonProps> = (props: DeleteListButtonProps) => (
    <Action className={buttonClasses} onClick={props.deleteList} revert>
        <IconTrash />
    </Action>
)

export default DeleteListButton;