import Action from "@atom/action/Action";
import ComponentHovereableColor from "@tailwind-helper/constants/ComponentHovereableColor";
import { FunctionComponent } from "react";

interface AddListButtonProps {
    add: () => void;
}

const AddListButton: FunctionComponent<AddListButtonProps> = (props: AddListButtonProps) =>
    <Action
        onClick={props.add}
        label={`Add list`}
        color={ComponentHovereableColor.SUCCESS}
        className={"top-0 right-0 absolute"}
    />;

export default AddListButton;