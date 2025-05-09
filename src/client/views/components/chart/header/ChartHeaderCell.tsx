import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";

export interface ChartHeaderCellProps {
    value: string;
}

const ChartHeaderCell: FunctionComponent<ChartHeaderCellProps> = (props: ChartHeaderCellProps) => {
    const className = Tailwind.builder()
        .add("p-2 w-16")
        .add("bg-secondary-50 dark:bg-secondary-900")
        .add("text-secondary-900 dark:text-primary-500")
        .add("font-bold border border-black flex-shrink-0")
        .build();

    return (
        <span className={className}>{props.value}</span>
    );
}

export default ChartHeaderCell;
