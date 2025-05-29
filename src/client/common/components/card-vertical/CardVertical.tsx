import Action from "@atom/action/Action";
import Headline from "@atom/headline/Headline";
import Image from "@atom/image/Image";
import Text from "@atom/text/Text";
import CardVerticalModel from "@model/components/CardVerticalModel";
import Tailwind from "@tailwind-helper/Tailwind";

export interface CardVerticalProps extends CardVerticalModel { }

const CardVertical: React.FC<CardVerticalProps> = ({ image, path, title, subtitle, rounded }) => {
    const className = Tailwind.builder()
        .add("flex flex-col justify-between space-y-3")
        .add("w-40 sm:w-48 lg:w-52 p-4")
        .add("bg-white/80 dark:bg-black/80 backdrop-blur-md")
        .add("border border-secondary-500/30 dark:border-white/10")
        .add("rounded-lg")
        .add("shadow-lg shadow-black/20 dark:shadow-sm dark:shadow-white/10 hover:shadow-xl")
        .add("transition-transform transform hover:scale-105")
        .build();

    const imageClassName = Tailwind.builder()
        .add("w-full h-full object-cover")
        .addIf("rounded-full", rounded)
        .build();

    const imageWrapperClassName = Tailwind.builder()
        .add("w-full aspect-square")
        .addIf("h-32 sm:h-40 lg:h-52", !rounded)
        .addIf("h-24 sm:h-32 lg:h-40", rounded)
        .build();

    return (
        <div className={className}>
            {image && (
                <Action path={path} className="w-full overflow-hidden rounded-xl" revert>
                    <div className={imageWrapperClassName}>
                        <Image className={imageClassName} {...image} />
                    </div>
                </Action>
            )}
            <div className="text-center">
                <Headline className="truncate text-sm md:text-lg font-semibold group-hover:text-secondary-900 dark:group-hover:text-primary-100">
                    <Action path={path} label={title} revert />
                </Headline>
                <Text className="mt-1 text-xs md:text-sm text-tertiary-700 dark:text-tertiary-300">
                    {subtitle}
                </Text>
            </div>
        </div>
    );
};

export default CardVertical;
