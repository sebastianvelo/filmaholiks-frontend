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
    <article className="bg-gradient-to-bl from-black via-white to-white p-2 rounded-tr-lg rounded-tl-lg flex justify-between space-x-4 shadow-lg" draggable="true">
        <div className="space-y-1 flex flex-col justify-between w-full">
            <div className="space-y-2">
                <Pill color={ComponentColor.SECONDARY}>{props.category}</Pill>
                <Action className={`text-dark font-bold overflow-ellipsis text-left`} path={props.path} label={props.title} revert />
            </div>
            <p>{props.info}</p>
        </div>
        <Image className="w-16 rounded-md shadow-lg" {...props.poster} />
    </article>

export default Item;