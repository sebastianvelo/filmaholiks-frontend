import { FunctionComponent } from "react";

export interface ChartHeaderCellProps {
    value: string;
}

const ChartHeaderCell: FunctionComponent<ChartHeaderCellProps> = (props: ChartHeaderCellProps) => (
    <span className="p-2 w-32 bg-primary text-dark font-bold border-2 border-black">{props.value}</span>
);

export default ChartHeaderCell;
