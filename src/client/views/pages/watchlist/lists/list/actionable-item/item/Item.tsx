import Action from "client/common/components/action/Action";
import Image, { ImageProps } from "client/common/components/image/Image";
import Pill from "client/common/components/pill/Pill";
import ComponentColor from "client/common/tailwind/constants/ComponentColor";
import { FunctionComponent } from "react";

export interface ItemProps {
    category?: string;
    title?: string;
    info?: string;
    poster?: ImageProps;
    path: string;
}

const Item: FunctionComponent<ItemProps> = (props: ItemProps) => (
    <article className="bg-gradient-to-r from-secondary to-black text-white flex space-x-4 shadow-lg w-full">
        <Action path={props.path} revert>
            {props.poster && <Image className="w-16 cursor-pointer" {...props.poster} />}
        </Action>
        <div className="space-y-2 flex flex-col justify-between py-2">
            <div>
                <Action className={`font-bold truncate text-left w-64`} path={props.path} label={props.title} revert />
                <p className="text-xs">{props.info}</p>
            </div>
            <div className="flex">
                {props.category?.split(",").map(cat => (
                    <Pill className="text-xs" color={ComponentColor.SUCCESS} label={cat} />
                ))}
            </div>
        </div>
    </article>
);

export default Item;