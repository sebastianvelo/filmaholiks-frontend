import Action from "client/common/components/action/Action";
import { TrashSvg } from "client/common/components/svg/Svg";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { FunctionComponent } from "react";
import ListTitle from "./title/ListTitle";

export interface ListHeaderProps {
    title?: string;
    changeTitle: (title: string) => void;
    deleteColumn: () => void;
}

const ListHeader: FunctionComponent<ListHeaderProps> = (props: ListHeaderProps) => (
    <div className="flex justify-between w-full bg-primary text-black">
        <ListTitle title={props.title} changeTitle={props.changeTitle} />
        <Action className="h-full w-full flex justify-center items-center" onClick={props.deleteColumn} color={ComponentHovereableColor.DANGER} revert>
            <TrashSvg />
        </Action>
    </div>
);

export default ListHeader;