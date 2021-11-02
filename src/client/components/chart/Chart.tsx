import { FunctionComponent } from "react";
import ChartBody, { ChartBodyProps } from "./body/ChartBody";
import ChartHeader, { ChartHeaderProps } from "./header/ChartHeader";

export interface ChartProps extends ChartBodyProps, ChartHeaderProps {}

const Chart: FunctionComponent<ChartProps> = (props: ChartProps) => (
  <div className={`text-center overflow-x-scroll bg-dark`}>
    <ChartHeader {...props} />
    <ChartBody {...props} />
  </div>
);

export default Chart;
