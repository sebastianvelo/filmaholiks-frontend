import { FunctionComponent } from "react";
import ChartBody, { ChartBodyProps } from "./body/ChartBody";
import ChartHeader, { ChartHeaderProps } from "./header/ChartHeader";

export interface ChartProps extends ChartBodyProps, ChartHeaderProps {}

const Chart: FunctionComponent<ChartProps> = (props: ChartProps) => (
  <div className={`max-h-screen text-center overflow-x-auto resize-y rounded-md`}>
    <ChartHeader {...props} />
    <ChartBody {...props} />
  </div>
);

export default Chart;
