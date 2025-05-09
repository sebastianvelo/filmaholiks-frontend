import Action from "client/common/atom/action/Action";
import ComponentHovereableColor from "@tailwind-helper/constants/ComponentHovereableColor";
import { FunctionComponent } from "react";

interface AddListButtonProps {
    addList: () => void;
}

const AddListButton: FunctionComponent<AddListButtonProps> = (props: AddListButtonProps) =>
    <Action
        onClick={props.addList}
        label={`Add list`}
        color={ComponentHovereableColor.SUCCESS}
        className={"w-full"}
    />;

export default AddListButton;