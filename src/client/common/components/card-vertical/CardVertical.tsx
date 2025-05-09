import Action from "@atom/action/Action";
import Headline from "@atom/headline/Headline";
import Image from "@atom/image/Image";
import Text from "@atom/text/Text";
import Tailwind from "@tailwind-helper/Tailwind";
import CardVerticalModel from "shared/model/components/CardVerticalModel";
import { FunctionComponent } from "react";

export interface CardVerticalProps extends CardVerticalModel { }

const CardVertical: FunctionComponent<CardVerticalProps> = ({ image, path, title, subtitle }) => {
    const className = Tailwind.builder()
        .add("flex flex-col justify-between space-y-3")
        .add("w-40 sm:w-48 lg:w-52 p-4")
        .add("bg-white/50 dark:bg-black/50 backdrop-blur-md")
        .add("border border-secondary-500/30 dark:border-white/10")
        .add("rounded-lg")
        .add("shadow-lg shadow-black/20 dark:shadow-sm dark:shadow-white/10 hover:shadow-xl")
        .add("transition-transform transform hover:scale-105")
        .build();

    return (
        <div className={className}>
            {image && (
                <Action path={path} className="w-full overflow-hidden rounded-xl" revert>
                    <div className="w-full h-32 sm:h-40 lg:h-52 aspect-square">
                        <Image
                            className="w-full h-full object-cover"
                            {...image}
                        />
                    </div>
                </Action>
            )}
            <div className="text-center">
                <Headline className="truncate text-lg font-semibold group-hover:text-secondary-900 dark:group-hover:text-primary-100">
                    <Action path={path} label={title} revert />
                </Headline>
                <Text className="mt-1 text-sm text-tertiary-700 dark:text-tertiary-300">
                    {subtitle}
                </Text>
            </div>
        </div>
    );
};

export default CardVertical;
