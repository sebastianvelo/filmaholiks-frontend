import { FunctionComponent } from "react";
import ChartBodyCell from "./body/ChartBodyCell";
import ChartHeaderCell from "./header/ChartHeaderCell";

const getMax = (body?: number[][]): number => {
  if (!body) return 0;
  const lengths = body.map(row => row.length);
  return Math.max(...lengths);
}
export interface ChartProps {
  header?: string[];
  body?: number[][];
}

const Chart: FunctionComponent<ChartProps> = (props: ChartProps) => (
  <div className={`text-center overflow-x-scroll bg-dark`}>
    <div className="flex">
      <ChartHeaderCell value={`E`} />
      {props.header?.map(value => <ChartHeaderCell value={value} />)}
    </div>
    <div className="flex">
      <div className="flex flex-col w-16 flex-shrink-0">
        {Array(getMax(props.body)).fill('').map((_, i) => (
          <ChartHeaderCell value={`${i + 1}`} />
        ))}
      </div>
      {props.body?.map(row => (
        <div className="flex flex-col w-16 flex-shrink-0">
          {row.map(value => <ChartBodyCell value={value} />)}
        </div>
      ))}
    </div>
  </div>
);

export default Chart;
