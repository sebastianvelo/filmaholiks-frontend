import Action from "client/common/components/action/Action";
import Image, { ImageProps } from "client/common/components/image/Image";
import Pill from "client/common/components/pill/Pill";
import ComponentColor from "client/common/tailwind/constants/ComponentColor";
import { FunctionComponent } from "react";

export interface ItemProps {
    category?: string;
    title: string;
    info?: string;
    poster: ImageProps;
    path: string;
}

const Item: FunctionComponent<ItemProps> = (props: ItemProps) =>
    <article className="bg-gradient-to-tr from-primary-light to-light rounded-tl-xl rounded-bl-xl flex justify-between space-x-4 shadow-lg w-full" draggable="true">
        <Action className={`text-primary font-bold overflow-ellipsis text-left`} path={props.path} revert>
            <Image className="h-24 w-20 rounded-tl-xl rounded-bl-xl" {...props.poster} />
        </Action>
        <div className="space-y-1 flex flex-col justify-between w-full py-2">
            <Action className={`text-black font-bold overflow-ellipsis text-left`} path={props.path} label={props.title} revert />
            <p>{props.info}</p>
            <Pill color={ComponentColor.SECONDARY}>{props.category}</Pill>
        </div>
    </article>

export default Item;