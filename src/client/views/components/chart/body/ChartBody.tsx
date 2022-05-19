import { FunctionComponent } from "react";
import ChartHeaderCell from "../header/ChartHeaderCell";
import ChartBodyCell from "./ChartBodyCell";

const getMax = (body?: number[][]): number => body ? Math.max(...body.map(column => column.length)) : 0;

export interface ChartBodyProps {
    body?: number[][];
}

const ChartBody: FunctionComponent<ChartBodyProps> = (props: ChartBodyProps) => (
    <div className="flex">
        <div className="flex flex-col w-16 flex-shrink-0">
            {Array(getMax(props.body)).fill('').map((_, i) => (
                <ChartHeaderCell value={`${i + 1}`} />
            ))}
        </div>
        {props.body?.map(column => (
            <div className="flex flex-col w-16 flex-shrink-0">
                {column.map(value => <ChartBodyCell value={value} />)}
            </div>
        ))}
    </div>
);

export default ChartBody;
