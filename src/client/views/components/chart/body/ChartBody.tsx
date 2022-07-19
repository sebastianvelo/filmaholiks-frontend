import { FunctionComponent } from "react";
import ChartHeaderCell from "../header/ChartHeaderCell";
import ChartBodyCell, { ChartBodyCellProps } from "./ChartBodyCell";

export interface ChartBodyProps {
    body?: {
        episode: string[];
        ratings: ChartBodyCellProps[][];
    };
}

const ChartBody: FunctionComponent<ChartBodyProps> = (props: ChartBodyProps) => (
    <div className="flex">
        <div className="flex flex-col w-16 flex-shrink-0">
            {props.body?.episode.map((value) => <ChartHeaderCell value={value} />)}
        </div>
        {props.body?.ratings.map((column) => (
            <div className="flex flex-col w-16 flex-shrink-0">
                {column.map((cell) => <ChartBodyCell {...cell} />)}
            </div>
        ))}
    </div>
);

export default ChartBody;
