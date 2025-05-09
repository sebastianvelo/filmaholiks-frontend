import { FunctionComponent } from "react";
import DragList from "./drag/DragList";
import ListTitle, { ListTitleProps } from "./title/ListTitle";

export interface ListHeaderProps extends ListTitleProps {
    listIdx: number;
    size?: number;
}

const ListHeader: FunctionComponent<ListHeaderProps> = (props: ListHeaderProps) => (
    <div className="flex bg-tertiary-50 text-dark dark:bg-tertiary-950 dark:text-white justify-between">
        <div className="flex items-center">
            <ListTitle  {...props} />
            <p className="text-lg pr-4 font-black">({props.size})</p>
        </div>
        {props.dynamic && <DragList listIdx={props.listIdx} />}
    </div>
);

export default ListHeader;