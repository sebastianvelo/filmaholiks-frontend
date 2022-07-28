import { FunctionComponent } from "react";

export interface ChartHeaderCellProps {
    value: string;
}

const ChartHeaderCell: FunctionComponent<ChartHeaderCellProps> = (props: ChartHeaderCellProps) => (
    <span className="p-2 w-16 bg-gradient-to-br from-secondary-dark to-secondary-dark text-primary-light font-bold border border-black flex-shrink-0">{props.value}</span>
);

export default ChartHeaderCell;
