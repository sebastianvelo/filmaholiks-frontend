import Action from "client/common/atom/action/Action";
import Image from "client/common/atom/image/Image";
import Pill from "@components/pill/Pill";
import { FunctionComponent } from "react";
import CardHorizontalModel from "shared/model/components/CardHorizontalModel";

export interface CardHorizontalProps extends CardHorizontalModel { }

const pillColor = {
    Comedy: "bg-primary-500 text-black",
    Animation: "bg-orange-700 text-white",
    Drama: "bg-blue-600 text-white",
    Mystery: "bg-blue-400 text-black",
    Crime: "bg-orange-600"
};

const CardHorizontal: FunctionComponent<CardHorizontalProps> = (props: CardHorizontalProps) => (
    <article className="bg-gradient-to-r dark:from-black dark:to-dark dark:text-white from-white to-light text-black flex space-x-2 shadow-lg w-full h-full">
        <Action path={props.path} revert>
            {props.image && <Image className="h-full w-16 cursor-pointer" {...props.image} />}
        </Action>
        <div className="space-y-2 flex flex-col justify-between py-2 w-72 overflow-hidden">
            <Action className={`font-bold truncate text-left`} path={props.path} label={props.title} revert />
            <div className="flex space-x-2 items-end">
                <div className="flex">
                    {props.tags?.map(tag => (
                        <Pill className={`text-xs ${pillColor[tag as keyof typeof pillColor]}`} label={tag} />
                    ))}
                </div>
                {false && <p className="text-xs">{props.subtitle}</p>}
            </div>
        </div>
    </article>
);

export default CardHorizontal;