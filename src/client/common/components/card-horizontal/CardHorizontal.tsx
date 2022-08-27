import Action from "client/common/atom/action/Action";
import Image from "client/common/atom/image/Image";
import Pill from "client/common/components/pill/Pill";
import ComponentColor from "client/common/tailwind/constants/ComponentColor";
import CardHorizontalModel from "shared/model/components/CardHorizontalModel";
import { FunctionComponent } from "react";

export interface CardHorizontalProps extends CardHorizontalModel { }

const CardHorizontal: FunctionComponent<CardHorizontalProps> = (props: CardHorizontalProps) => (
    <article className="bg-gradient-to-r dark:from-black dark:to-dark dark:text-white from-white to-light text-black flex space-x-2 shadow-lg w-full h-full">
        <Action path={props.path} revert>
            {props.image && <Image className="h-full w-16 cursor-pointer" {...props.image} />}
        </Action>
        <div className="space-y-2 flex flex-col justify-between py-2 w-72 overflow-hidden">
            <Action className={`font-bold truncate text-left`} path={props.path} label={props.title} revert />
            <div className="flex space-x-2 items-end">
                <div className="hidden md:flex">
                    {props.tags?.includes("Comedy") ?
                        <Pill className="text-xs text-white" color={ComponentColor.PRIMARY} label="Comedy" /> :
                        <Pill className="text-xs text-white" color={ComponentColor.INFO} label="Drama" />}
                </div>
                {false && <p className="text-xs">{props.subtitle}</p>}
            </div>
        </div>
    </article>
);

export default CardHorizontal;