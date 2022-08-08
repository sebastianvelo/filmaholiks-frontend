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
    <article className="bg-gradient-to-r from-light to-white text-black flex space-x-4 shadow-lg w-96 h-24">
        <Action path={props.path} revert>
            {props.poster && <Image className="h-full cursor-pointer" {...props.poster} />}
        </Action>
        <div className="space-y-2 flex flex-col justify-between py-2 w-72 overflow-hidden">
            <div>
                <Action className={`font-bold truncate text-left`} path={props.path} label={props.title} revert />
                <p className="text-xs">{props.info}</p>
            </div>
            <div className="flex">
                {props.category?.split(",").sort().slice(0, 2).map(cat => (
                    <Pill className="text-xs text-white" color={ComponentColor.SECONDARY} label={cat} />
                ))}
            </div>
        </div>
    </article>
);

export default Item;