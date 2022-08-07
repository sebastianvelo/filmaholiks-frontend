import Action from "client/common/components/action/Action";
import { DragSvg } from "client/common/components/svg/Svg";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { FunctionComponent } from "react";
import ListTitle from "./title/ListTitle";

export interface ListHeaderProps {
    title?: string;
    changeTitle: (title: string) => void;
    onDragStart: React.DragEventHandler<HTMLDivElement>;
}

const ListHeader: FunctionComponent<ListHeaderProps> = (props: ListHeaderProps) => (
    <div className="flex">
        <ListTitle title={props.title} changeTitle={props.changeTitle} />
        <div draggable="true" onDragStart={props.onDragStart}>
            <Action className="h-full flex justify-center items-center cursor-move" color={ComponentHovereableColor.SECONDARY} >
                <DragSvg />
            </Action>
        </div>
    </div>
);

export default ListHeader;