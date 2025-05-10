import Tailwind from "@tailwind-helper/Tailwind";
import { FunctionComponent } from "react";

export interface ChartHeaderCellProps {
    value: string;
}

const ChartHeaderCell: FunctionComponent<ChartHeaderCellProps> = (props: ChartHeaderCellProps) => {
    const className = Tailwind.builder()
        .add(`bg-white text-tertiary-900`)
        .add(`dark:bg-black dark:text-tertiary-100`)
        .add("p-3 w-16")
        .add("box-border transition-all duration-300")
        .add("flex items-center justify-center")
        .add("font-bold border border-black/20 dark:border-white/10 flex-shrink-0")
        .build();

    return (
        <span className={className}>{props.value}</span>
    );
}

export default ChartHeaderCell;
