import { FunctionComponent } from "react";
import DragList from "./drag/DragList";
import ListTitle from "./title/ListTitle";

export interface ListHeaderProps {
    title?: string;
    changeListTitle: (title: string) => void;
    size?: number;
    listIdx: number;
}

const ListHeader: FunctionComponent<ListHeaderProps> = (props: ListHeaderProps) => (
    <div className="flex bg-primary-light text-black dark:bg-secondary dark:text-white justify-between">
        <div className="flex items-center">
            <ListTitle size={props.size} title={props.title} changeTitle={props.changeListTitle} />
            <p className="text-2xl pr-4 font-black">({props.size})</p>
        </div>
        <DragList listIdx={props.listIdx} />
    </div>
);

export default ListHeader;