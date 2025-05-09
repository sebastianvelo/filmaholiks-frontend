import Action from "client/common/atom/action/Action";
import { IconTrash } from "client/common/components/svg/Svg";
import ComponentHovereableColor from "@tailwind-helper/constants/ComponentHovereableColor";
import { FunctionComponent } from "react";

export interface ListFooterProps {
    deleteList: () => void;
}

const ListFooter: FunctionComponent<ListFooterProps> = (props: ListFooterProps) => (
    <>
        <Action className="h-12 w-full flex justify-center items-center" onClick={props.deleteList} color={ComponentHovereableColor.DANGER} revert>
            <IconTrash />
        </Action>
    </>
)

export default ListFooter;