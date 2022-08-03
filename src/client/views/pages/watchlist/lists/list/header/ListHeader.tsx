import Action from "client/common/components/action/Action";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { FunctionComponent } from "react";
import ListTitle from "./title/ListTitle";

export interface ListHeaderProps {
    title?: string;
    changeTitle: (title: string) => void;
    deleteColumn: () => void;
}

const ListHeader: FunctionComponent<ListHeaderProps> = (props: ListHeaderProps) => (
    <div className="flex justify-between w-full">
        <ListTitle title={props.title} changeTitle={props.changeTitle} />
        <Action className="w-8 h-8" onClick={props.deleteColumn} label="x" color={ComponentHovereableColor.DANGER} revert />
    </div>
);

export default ListHeader;