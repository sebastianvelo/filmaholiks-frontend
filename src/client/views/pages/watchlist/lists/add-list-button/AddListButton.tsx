import Action from "client/common/components/action/Action";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { FunctionComponent } from "react";

interface AddListButtonProps {
    addColumn: () => void;
}

const AddListButton: FunctionComponent<AddListButtonProps> = (props: AddListButtonProps) =>
    <Action
        onClick={props.addColumn}
        label={`Add list`}
        color={ComponentHovereableColor.SUCCESS}
        className={"px-4 py-2 w-full"}
    />;

export default AddListButton;