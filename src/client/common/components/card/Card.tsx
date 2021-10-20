import Action from "client/common/components/action/Action";
import Headline from "client/common/components/headline/Headline";
import Image, { ImageProps } from "client/common/components/image/Image";
import Skeleton from "client/common/components/skeleton/Skeleton";
import Text from "client/common/components/text/Text";
import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";

export interface CardProps {
    title?: string;
    subtitle?: string;
    image?: ImageProps;
    path?: string;
    loading?: boolean;
}

const Card: FunctionComponent<CardProps> = (props: CardProps) => {
    const className = Tailwind.builder()
        .add(`flex-none flex flex-col px-2 py-1 space-y-2`)
        .add(`w-64 shadow-lg mb-10 bg-black`)
        .add(`transform `)
        .add(`hover:scale-110`)
        .add(`transition-all ease-in duration-200`)
        .add(`border border-dark-light rounded-md `)
        .build();

    return (
        <div className={className}>
            <Skeleton loading={props.loading!} className={`h-80`}>
                <Action path={props.path} className={`flex justify-center`}>
                    <Image {...props.image!} className={`h-80`} />
                </Action>
            </Skeleton>
            <Skeleton loading={props.loading!} className={`h-4 w-24 mb-4`}>
                <Headline className={`truncate text-xl`}>
                    <Action path={props.path} label={props.title} revert />
                </Headline>
            </Skeleton>
            <Skeleton loading={props.loading!} className={`h-4 w-16`}>
                <Text>{props.subtitle}</Text>
            </Skeleton>
        </div>
    );
}

export default Card;