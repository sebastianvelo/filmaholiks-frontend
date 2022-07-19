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
        .add(`flex-none flex flex-col space-y-2 justify-between`)
        .add(`w-48 shadow-lg bg-gradient-to-b from-secondary-dark via-secondary to-secondary-dark`)
        .add(`transform `)
        .add(`hover:scale-110`)
        .add(`transition-all ease-in duration-200`)
        .add(`border border-secondary rounded-md text-center`)
        .build();

    return (
        <div className={className}>
            {props.image &&
                <Action path={props.path} className={`flex justify-center`} revert>
                    <Image {...props.image!} />
                </Action>
            }
            <div>
                <Headline className={`truncate text-md px-2`}>
                    <Action path={props.path} label={props.title} revert />
                </Headline>
                <Text className={`pb-1`}>{props.subtitle}</Text>
            </div>
        </div>
    );
}

export default Card;