import { FunctionComponent } from "react";

export interface ChartHeaderCellProps {
    value: string;
}

const ChartHeaderCell: FunctionComponent<ChartHeaderCellProps> = (props: ChartHeaderCellProps) => (
    <span className="p-2 w-16 bg-dark text-primary font-bold border-2 border-black flex-shrink-0">{props.value}</span>
);

export default ChartHeaderCell;
