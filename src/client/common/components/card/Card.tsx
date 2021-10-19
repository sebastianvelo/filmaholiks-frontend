import Action from "client/common/components/action/Action";
import Headline from "client/common/components/headline/Headline";
import Image, { ImageProps } from "client/common/components/image/Image";
import Skeleton from "client/common/components/skeleton/Skeleton";
import Text from "client/common/components/text/Text";
import { FunctionComponent } from "react";

export interface CardProps {
    title?: string;
    subtitle?: string;
    image?: ImageProps;
    path?: string;
    loading?: boolean;
}

const Card: FunctionComponent<CardProps> = (props: CardProps) => {
    return (
        <div className={`my-4 transform ease-in-out hover:rotate-0 hover:scale-115 transition-all duration-200 cursor-pointer `}>
            <div className={`transform ease-in hover:scale-110 duration-200 transition-all w-full border border-dark-light rounded-md shadow-lg`}>
                <div className={`bg-black flex-none rounded-md w-64 shadow-lg flex flex-col divide-y divide-dark-light`}>
                    <Skeleton loading={props.loading!} className={`h-80`}>
                        <Action path={props.path} className={`flex justify-center`}>
                            <Image {...props.image!} className={`h-80`} />
                        </Action>
                    </Skeleton>
                    <div className={`p-2`}>
                        <Skeleton loading={props.loading!} className={`h-4 w-24 mb-4`}>
                            <Headline className={`truncate text-xl`}>
                                <Action path={props.path} label={props.title} revert />
                            </Headline>
                        </Skeleton>
                        <Skeleton loading={props.loading!} className={`h-4 w-16`}>
                            <Text>{props.subtitle}</Text>
                        </Skeleton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;