import Action from "components/action/Action";
import Headline from "components/headline/Headline";
import Image, { ImageProps } from "components/image/Image";
import Text from "components/text/Text";
import { FunctionComponent } from "react";

export interface CardProps {
    title: string;
    subtitle: string;
    image?: ImageProps;
    path?: string;
}

const Card: FunctionComponent<CardProps> = (props: CardProps) => {
    return (
        <div className={`my-4 transform ease-in-out hover:rotate-0 hover:scale-115 transition-all duration-200 cursor-pointer `}>
            <div className={`transform ease-in hover:scale-110 duration-200 transition-all w-full border border-dark-light rounded-md shadow-lg`}>
                <div className={`bg-black flex-none rounded-md w-64 shadow-lg flex flex-col divide-y divide-dark-light`}>
                    {props.image && (
                        <Action path={props.path} className={`flex justify-center`}>
                            <Image {...props.image} className={`h-80`} />
                        </Action>
                    )}
                    <div className={`py-2 px-4`}>
                        <Headline className={`truncate`}>
                            <Action path={props.path} label={props.title} />
                        </Headline>
                        <Text>{props.subtitle}</Text>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;