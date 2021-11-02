import { FunctionComponent } from "react";
import ChartHeaderCell from "./ChartHeaderCell";

export interface ChartHeaderProps {
    header?: string[];
}

const ChartHeader: FunctionComponent<ChartHeaderProps> = (props: ChartHeaderProps) => (
    <div className="flex">
        <ChartHeaderCell value={`E`} />
        {props.header?.map(value => <ChartHeaderCell value={value} />)}
    </div>
);

export default ChartHeader;
