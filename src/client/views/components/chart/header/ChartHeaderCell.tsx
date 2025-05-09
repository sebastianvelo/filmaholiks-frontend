import Tailwind from "@tailwind-helper/Tailwind";
import { FunctionComponent } from "react";

export interface ChartHeaderCellProps {
    value: string;
}

const ChartHeaderCell: FunctionComponent<ChartHeaderCellProps> = (props: ChartHeaderCellProps) => {
    const className = Tailwind.builder()
        .add(`bg-gradient-to-br`)
        .add(`from-tertiary-100 to-tertiary-300 text-tertiary-700`)
        .add(`dark:from-tertiary-800 dark:to-tertiary-900 dark:text-tertiary-100`)
        .add("p-3 w-16")
        .add("box-border transition-all duration-300")
        .add("flex items-center justify-center")
        .add("font-bold border border-black flex-shrink-0")
        .build();

    return (
        <span className={className}>{props.value}</span>
    );
}

export default ChartHeaderCell;
