import { FunctionComponent } from "react";
import ChartBody, { ChartBodyProps } from "./body/ChartBody";
import ChartHeader, { ChartHeaderProps } from "./header/ChartHeader";

export interface ChartProps extends ChartBodyProps, ChartHeaderProps {}

const Chart: FunctionComponent<ChartProps> = (props: ChartProps) => (
  <div className={`h-96 text-center overflow-x-auto bg-dark resize-y overflow-y-auto border border-secondary rounded-md`}>
    <ChartHeader {...props} />
    <ChartBody {...props} />
  </div>
);

export default Chart;
