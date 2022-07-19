import Action from "client/common/components/action/Action";
import { FunctionComponent } from "react";

interface AddColumnButtonProps {
    columns: any[];
    addColumn: () => void;
}

const AddColumnButton: FunctionComponent<AddColumnButtonProps> = (props: AddColumnButtonProps) =>
    <Action
        onClick={props.addColumn}
        label={`Add column`}
        className={"px-4 py-2 bg-primary hover:bg-primary-dark text-black text-sm font-medium w-64 h-full rounded-lg"}
    />;

export default AddColumnButton;