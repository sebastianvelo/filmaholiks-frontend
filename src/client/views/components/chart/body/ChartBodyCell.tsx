import Image from "@atom/image/Image";
import Tailwind from "@tailwind-helper/Tailwind";
import { ChartBodyCellModel } from "shared/model/components/ChartModel";
import { FunctionComponent } from "react";

// Gradientes para calificaciones C (Los más bajos)
const topC = (props: ChartBodyCellProps) => Tailwind.builder()
    .addIf(`from-tertiary-700 to-tertiary-800 text-tertiary-100`, props.rating >= 1 && props.rating < 1.5)
    .addIf(`from-tertiary-600 to-tertiary-700 text-tertiary-100`, props.rating >= 1.5 && props.rating < 2)
    .addIf(`from-red-900 to-red-800 text-tertiary-100`, props.rating >= 2 && props.rating < 2.5)
    .addIf(`from-red-800 to-red-700 text-tertiary-100`, props.rating >= 2.5 && props.rating < 3)
    .addIf(`from-red-700 to-red-600 text-tertiary-100`, props.rating >= 3 && props.rating < 3.5)
    .addIf(`from-red-600 to-red-500 text-white`, props.rating >= 3.5 && props.rating < 4)
    .build();

// Gradientes para calificaciones B (Medianas-bajas)
const topB = (props: ChartBodyCellProps) => Tailwind.builder()
    .addIf(`from-red-500 to-orange-600 text-white`, props.rating >= 4 && props.rating < 4.5)
    .addIf(`from-orange-600 to-orange-500 text-white`, props.rating >= 4.5 && props.rating < 5)
    .addIf(`from-orange-500 to-yellow-500 text-dark`, props.rating >= 5 && props.rating < 5.5)
    .addIf(`from-yellow-500 to-yellow-400 text-dark`, props.rating >= 5.5 && props.rating < 6)
    .addIf(`from-yellow-400 to-yellow-200 text-dark`, props.rating >= 6 && props.rating < 6.5)
    .build();

// Gradientes para calificaciones A (Buenas)
const topA = (props: ChartBodyCellProps) => Tailwind.builder()
    .addIf(`from-yellow-200 to-green-200 text-dark`, props.rating >= 6.5 && props.rating < 7)
    .addIf(`from-green-200 to-green-300 text-dark`, props.rating >= 7 && props.rating < 7.5)
    .addIf(`from-green-300 to-green-400 text-dark`, props.rating >= 7.5 && props.rating < 8)
    .addIf(`from-green-400 to-green-500 text-dark`, props.rating >= 8 && props.rating < 8.5)
    .build();

// Gradientes para calificaciones S (Excelentes)
const topS = (props: ChartBodyCellProps) => Tailwind.builder()
    .addIf(`from-green-500 to-teal-400 text-dark`, props.rating >= 8.5 && props.rating < 9)
    .addIf(`from-teal-400 to-teal-600 text-white`, props.rating >= 9 && props.rating < 9.5)
    .addIf(`from-teal-600 to-blue-400 text-white`, props.rating >= 9.5 && props.rating < 10)
    .addIf(`from-blue-400 to-blue-600 text-white`, props.rating === 10)
    .build();


const getClassName = (props: ChartBodyCellProps) => Tailwind.builder()
    .add(topC(props))
    .add(topB(props))
    .add(topA(props))
    .add(topS(props))
    .addIf(`dark:bg-black/90 dark:text-tertiary-200 bg-white text-black`, props.rating === -1)
    .addIf("border-primary-500/50", props.isOpened)
    .addIf("border-dark/30 dark:border-white/10", !props.isOpened)
    .add(`bg-gradient-to-br`)
    .add("p-3 w-full group relative")
    .add("hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/20 hover:z-10")
    .add("border box-border transition-all duration-300 cursor-pointer rounded-md")
    .add("flex items-center justify-center")
    .build();

const getEpisodeNameClassName = (props: ChartBodyCellProps) => Tailwind.builder()
    .add("flex opacity-0 scale-95 pointer-events-none")
    .add("group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto")
    .addIf("bottom-2", !props.isTopHalf)
    .addIf("top-2", props.isTopHalf)
    .addIf("left-14", props.isLeftHalf)
    .addIf("right-14", !props.isLeftHalf)
    .add("shadow-xl shadow-black/20")
    .add("flex-col justify-between")
    .add("duration-300 transition-all")
    .add("absolute z-20 origin-center")
    .add("bg-gradient-to-tr from-secondary-100/90 to-white/90 text-secondary-900")
    .add("dark:from-primary-900/90 dark:to-black/90 dark:text-primary-200")
    .add("font-bold rounded-lg w-72 backdrop-blur-md")
    .add("border border-white/30 dark:border-primary-500/30")
    .add("overflow-hidden")
    .build();

const getRatingBadgeClass = (props: ChartBodyCellProps) => Tailwind.builder()
    .add("absolute top-1 right-1 rounded-full w-6 h-6 flex items-center justify-center")
    .add("text-xs font-bold")
    .addIf("bg-red-600 text-white", props.rating < 5)
    .addIf("bg-yellow-400 text-black", props.rating >= 5 && props.rating < 7.5)
    .addIf("bg-green-500 text-white", props.rating >= 7.5 && props.rating < 9)
    .addIf("bg-blue-500 text-white", props.rating >= 9)
    .addIf("hidden", props.rating === -1)
    .build();

export interface ChartBodyCellProps extends ChartBodyCellModel {
    isOpened: boolean;
    toggle: () => void;
}

const ChartBodyCell: FunctionComponent<ChartBodyCellProps> = (props: ChartBodyCellProps) => {
    const href = `${window.location.href}${props.href}`;

    return (
        <div className={getClassName(props)} onClick={props.toggle}>
            <p className="font-medium text-center">{props.value}</p>
            <a href={href} className={getEpisodeNameClassName(props)}>
                <div className="bg-black/10 dark:bg-white/5 p-3 font-bold">
                    <p className="truncate">{props.title}</p>
                </div>
                <Image className="w-full h-40 object-cover" {...props.image} />
                <div className="p-2 text-sm font-normal dark:text-primary-300 text-secondary-700">
                    <p>Rating: <span className="font-bold">{props.rating}</span> / 10</p>
                </div>
            </a>
        </div>
    );
}

export default ChartBodyCell;