import { FunctionComponent } from "react";

export interface ChartHeaderCellProps {
    value: string;
}

const ChartHeaderCell: FunctionComponent<ChartHeaderCellProps> = (props: ChartHeaderCellProps) => (
    <span className="p-2 w-16 bg-secondary-dark text-primary font-bold border border-black flex-shrink-0">{props.value}</span>
);

export default ChartHeaderCell;
