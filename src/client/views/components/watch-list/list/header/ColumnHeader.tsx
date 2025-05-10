import { FunctionComponent } from "react";
import DeleteListButton from "../../buttons/DeleteListButton";
import DragListButton from "../../buttons/DragListButton";
import ListTitle, { ListTitleProps } from "./title/ListTitle";

export interface ColumnHeaderProps extends ListTitleProps {
    listIdx: number;
    size?: number;
    deleteList: () => void;
}

const ColumnHeader: FunctionComponent<ColumnHeaderProps> = (props: ColumnHeaderProps) => (
    <div className="flex bg-tertiary-50 text-dark dark:bg-tertiary-950 dark:text-white justify-between">
        <div className="flex items-center relative px-2">
            <p className="text-center text-xs flex items-center justify-center h-8 w-8 p-2 font-black dark:bg-primary-500 bg-secondary-300 rounded-md">{props.size}</p>
            <ListTitle  {...props} />
        </div>
        <div className="flex flex-col">
            {props.dynamic && <DragListButton listIdx={props.listIdx} />}
            {props.dynamic && <DeleteListButton deleteList={props.deleteList} />}
        </div>
    </div>
);

export default ColumnHeader;