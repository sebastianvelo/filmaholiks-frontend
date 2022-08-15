import Action from "client/common/atom/action/Action";
import Headline from "client/common/atom/headline/Headline";
import Image from "client/common/atom/image/Image";
import Text from "client/common/atom/text/Text";
import Tailwind from "client/common/tailwind/Tailwind";
import CardVerticalModel from "model/components/CardVerticalModel";
import { FunctionComponent } from "react";

export interface CardVerticalProps extends CardVerticalModel { }

const CardVertical: FunctionComponent<CardVerticalProps> = (props: CardVerticalProps) => {
    const className = Tailwind.builder()
        .add("flex-none flex flex-col space-y-2 justify-between")
        .add("w-32 sm:w-44 lg:w-48 shadow-lg")
        .add("bg-gradient-to-t from-secondary-lighter via-secondary-lighter to-secondary-lighter")
        .add("dark:from-secondary-dark dark:via-secondary dark:to-secondary-dark")
        .add("transform")
        .add("hover:scale-110")
        .add("transition-all ease-in duration-200")
        .add("border border-secondary-light hover:border-secondary")
        .add("dark:border-primary dark:hover:border-primary-dark")
        .add("rounded-sm text-center group shadow-lg")
        .add("filter")
        .build();

    return (
        <div className={className}>
            {props.image &&
                <Action path={props.path} className={`flex justify-center`} revert>
                    <Image className="rounded-tl-sm rounded-tr-sm" {...props.image} />
                </Action>
            }
            <div>
                <Headline className={`truncate text-md px-2 dark:group-hover:text-primary-dark group-hover:text-secondary-dark`}>
                    <Action path={props.path} label={props.title} revert />
                </Headline>
                <Text className={`pb-1 text-secondary dark:text-white`}>{props.subtitle}</Text>
            </div>
        </div>
    );
}

export default CardVertical;