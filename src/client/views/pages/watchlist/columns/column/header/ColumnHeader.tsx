import Action from "client/common/components/action/Action";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { FunctionComponent } from "react";
import ColumnTitle from "./title/ColumnTitle";

export interface ColumnHeaderProps {
    title?: string;
    changeTitle: (title: string) => void;
    deleteColumn: () => void;
}

const ColumnHeader: FunctionComponent<ColumnHeaderProps> = (props: ColumnHeaderProps) => (
    <div className="flex justify-between">
        <ColumnTitle title={props.title} changeTitle={props.changeTitle} />
        <Action className="w-8 h-6 font-bold rounded-bl-md" onClick={props.deleteColumn} label="X" color={ComponentHovereableColor.DANGER} revert />
    </div>
);

export default ColumnHeader;