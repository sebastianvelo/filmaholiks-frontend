import { FunctionComponent } from "react";
import ChartBodyCell from "./body/ChartBodyCell";
import ChartHeaderCell from "./header/ChartHeaderCell";

export interface ChartProps {
  header?: string[];
  body?: number[][];
}

const Chart: FunctionComponent<ChartProps> = (props: ChartProps) => (
  <div className={`text-center overflow-x-scroll`}>
    <div className="flex">
      {props.header?.map(value => <ChartHeaderCell value={value} />)}
    </div>
    <div className="flex">
      {props.body?.map(row => (
        <div className="flex flex-col w-20">
          {row.map(value => <ChartBodyCell value={value} />)}
        </div>
      ))}
    </div>
  </div>
);

export default Chart;
