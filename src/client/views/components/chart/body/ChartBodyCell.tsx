import Image, { ImageProps } from "client/common/components/image/Image";
import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";

const getClassName = (value: number) => Tailwind.builder()
    .add(`bg-gradient-to-b`)
    .addIf(`bg-black text-gray-200`, value === -1)
    .addIf(`from-gray-700 to-gray-800 text-gray-200`, value >= 1 && value < 1.5)
    .addIf(`from-gray-600 to-gray-700 text-gray-200`, value >= 1.5 && value < 2)
    .addIf(`from-red-900 to-red-800 text-gray-200`, value >= 2 && value < 2.5)
    .addIf(`from-red-800 to-red-700 text-gray-200`, value >= 2.5 && value < 3)
    .addIf(`from-red-700 to-red-600 text-gray-200`, value >= 3 && value < 3.5)
    .addIf(`from-red-600 to-red-500 text-dark`, value >= 3.5 && value < 4)
    .addIf(`from-red-500 to-orange-600 text-dark`, value >= 4 && value < 4.5)
    .addIf(`from-orange-600 to-orange-500 text-dark`, value >= 4.5 && value < 5)
    .addIf(`from-orange-500 to-yellow-500 text-dark`, value >= 5 && value < 5.5)
    .addIf(`from-yellow-500 to-yellow-400 text-dark`, value >= 5.5 && value < 6)
    .addIf(`from-yellow-400 to-yellow-200 text-dark`, value >= 6 && value < 6.5)
    .addIf(`from-yellow-200 to-green-200 text-dark`, value >= 6.5 && value < 7)
    .addIf(`from-green-200 to-green-300 text-dark`, value >= 7 && value < 7.5)
    .addIf(`from-green-300 to-green-400 text-dark`, value >= 7.5 && value < 8)
    .addIf(`from-green-400 to-green-500 text-dark`, value >= 8 && value < 8.5)
    .addIf(`from-green-500 to-teal-400 text-dark`, value >= 8.5 && value < 9)
    .addIf(`from-teal-400 to-teal-600 text-dark`, value >= 9 && value < 9.5)
    .addIf(`from-teal-600 to-blue-400 text-dark`, value >= 9.5 && value < 10)
    .addIf(`from-blue-400 to-blue-600 text-dark`, value === 10)
    .add("p-2 w-full border border-dark group relative")
    .add("hover:border-primary box-border transition-all duration-300")
    .build();

const getEpisodeNameClassName = () => Tailwind.builder()
    .add("hidden group-hover:flex flex-col justify-between text-primary")
    .add("absolute left-30 z-20")
    .add("bg-gradient-to-tl from-secondary-dark to-black")
    .add("font-bold p-2 rounded-sm w-64")
    .build();

export interface ChartBodyCellProps {
    rating: number;
    value: string;
    href: string;
    title: string;
    image: ImageProps;
}

const ChartBodyCell: FunctionComponent<ChartBodyCellProps> = (props: ChartBodyCellProps) => {
    const href = `${window.location.href}${props.href}`
    return (
        <a href={href} className={getClassName(props.rating)}>
            {props.value}
            <div className={getEpisodeNameClassName()}>
                {props.title}
                <Image className="w-64" {...props.image} />
            </div>
        </a>
    );
}

export default ChartBodyCell;
