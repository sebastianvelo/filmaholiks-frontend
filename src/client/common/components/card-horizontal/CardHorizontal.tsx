import Action from "@atom/action/Action";
import Image from "@atom/image/Image";
import Pill from "@components/pill/Pill";
import CardHorizontalModel from "@model/components/CardHorizontalModel";

export interface CardHorizontalProps extends CardHorizontalModel { }

const pillColor = {
    Comedy: "bg-primary-500 text-white font-medium",
    Animation: "bg-orange-500 text-white font-medium",
    Drama: "bg-blue-600 text-white font-medium",
    Mystery: "bg-indigo-500 text-white font-medium",
    Crime: "bg-red-600 text-white font-medium"
};

const CardHorizontal: React.FC<CardHorizontalProps> = (props: CardHorizontalProps) => (
    <article className="bg-gradient-to-r dark:from-black dark:to-tertiary-950 dark:text-white from-white to-tertiary-200 text-tertiary-800 flex space-x-3 shadow-xl hover:shadow-2xl transition-all duration-300 w-full h-full rounded-tl-lg rounded-bl-lg overflow-hidden border border-tertiary-200 dark:border-tertiary-700">
        <Action path={props.path} revert>
            {props.image && <Image className="h-full w-20 object-cover cursor-pointer" {...props.image} />}
        </Action>
        <div className="space-y-2 flex flex-col justify-between py-3 pr-3 w-72 overflow-hidden">
            <Action
                className="font-bold truncate text-left hover:text-secondary-500 dark:hover:text-primary-400 transition-colors duration-200"
                path={props.path}
                label={props.title}
                revert
            />
            <div className="flex flex-wrap gap-2 items-end">
                <div className="flex flex-wrap gap-1">
                    {props.tags?.map((tag, index) => (
                        <Pill
                            key={index}
                            className={`text-xs ${pillColor[tag as keyof typeof pillColor] || "bg-tertiary-500 text-white"} px-2 py-1 rounded-full`}
                            label={tag}
                        />
                    ))}
                </div>
                {props.subtitle && <p className="text-xs text-tertiary-500 dark:text-tertiary-400 italic">{props.subtitle}</p>}
            </div>
        </div>
    </article>
);

export default CardHorizontal;