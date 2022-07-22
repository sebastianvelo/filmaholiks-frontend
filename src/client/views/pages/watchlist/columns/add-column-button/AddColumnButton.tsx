import Action from "client/common/components/action/Action";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { FunctionComponent } from "react";

interface AddColumnButtonProps {
    columns: any[];
    addColumn: () => void;
}

const AddColumnButton: FunctionComponent<AddColumnButtonProps> = (props: AddColumnButtonProps) =>
    <Action
        onClick={props.addColumn}
        label={`Add column`}
        color={ComponentHovereableColor.PRIMARY}
        className={"px-4 py-2 w-full"}
    />;

export default AddColumnButton;