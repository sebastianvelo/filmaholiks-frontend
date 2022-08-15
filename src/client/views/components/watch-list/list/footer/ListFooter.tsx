import Action from "client/common/atom/action/Action";
import { TrashSvg } from "client/common/components/svg/Svg";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { FunctionComponent } from "react";

export interface ListFooterProps {
    deleteList: () => void;
}

const ListFooter: FunctionComponent<ListFooterProps> = (props: ListFooterProps) => (
    <>
        <Action className="h-12 w-full flex justify-center items-center" onClick={props.deleteList} color={ComponentHovereableColor.DANGER} revert>
            <TrashSvg />
        </Action>
    </>
)

export default ListFooter;