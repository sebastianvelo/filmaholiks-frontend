import { FunctionComponent } from "react";
import DragList from "./drag/DragList";
import ListTitle, { ListTitleProps } from "./title/ListTitle";

export interface ColumnHeaderProps extends ListTitleProps {
    listIdx: number;
    size?: number;
}

const ColumnHeader: FunctionComponent<ColumnHeaderProps> = (props: ColumnHeaderProps) => (
    <div className="flex bg-tertiary-50 text-dark dark:bg-tertiary-950 dark:text-white justify-between">
        <div className="flex items-center">
            <ListTitle  {...props} />
            <p className="text-lg pr-4 font-black">({props.size})</p>
        </div>
        {props.dynamic && <DragList listIdx={props.listIdx} />}
    </div>
);

export default ColumnHeader;