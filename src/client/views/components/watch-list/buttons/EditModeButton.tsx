import Action from "@atom/action/Action";
import Tailwind from "@tailwind-helper/Tailwind";
import { IconDone, IconDraw } from "client/common/components/svg/Svg";
import { FunctionComponent } from "react";

const actionClasses = Tailwind.builder()
    .add("hidden md:flex justify-center items-center")
    .add("cursor-pointer h-max p-2")
    .add("rounded-lg")
    .add("bg-blue-600 dark:bg-blue-600")
    .add("hover:bg-blue-700 dark:hover:bg-blue-700")
    .add("transition-all duration-200")
    .add("shadow-md hover:shadow-lg")
    .add("border border-gray-200 dark:border-gray-700")
    .add("text-gray-200 dark:text-gray-100")
    .build();

export interface EditModeButtonProps {
    isEditing: boolean;
    toggleEditing: () => void
}

const EditModeButton: FunctionComponent<EditModeButtonProps> = ({ isEditing, toggleEditing }) => {
    return (
        <Action onClick={toggleEditing} className={actionClasses} revert>
            {!isEditing ? <IconDraw /> : <IconDone />}
        </Action>
    );
}

export default EditModeButton;