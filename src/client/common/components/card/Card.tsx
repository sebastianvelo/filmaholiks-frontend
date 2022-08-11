import Action from "client/common/components/action/Action";
import Headline from "client/common/components/headline/Headline";
import Image, { ImageProps } from "client/common/components/image/Image";
import Text from "client/common/components/text/Text";
import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";

export interface CardProps {
    title?: string;
    subtitle?: string;
    image?: ImageProps;
    path?: string;
}

const Card: FunctionComponent<CardProps> = (props: CardProps) => {
    const className = Tailwind.builder()
        .add("flex-none flex flex-col space-y-2 justify-between")
        .add("w-32 sm:w-44 lg:w-48 shadow-lg")
        .add("bg-gradient-to-t from-primary-light to-primary")
        .add("dark:from-secondary-dark dark:via-secondary dark:to-secondary-dark")
        .add("transform")
        .add("hover:scale-110")
        .add("transition-all ease-in duration-200")
        .add("border border-primary-dark hover:border-primary rounded-sm text-center group shadow-lg")
        .add("filter ")
        .build();

return (
        <div className={className}>
            {props.image &&
                <Action path={props.path} className={`flex justify-center`} revert>
                    <Image className="rounded-tl-sm rounded-tr-sm" {...props.image} />
                </Action>
            }
            <div>
                <Headline className={`truncate text-md px-2 dark:group-hover:text-primary group-hover:text-secondary-dark`}>
                    <Action path={props.path} label={props.title} revert />
                </Headline>
                <Text className={`pb-1 text-secondary dark:text-white`}>{props.subtitle}</Text>
            </div>
        </div>
    );
}

export default Card;