import ChartModel from "model/components/ChartModel";
import { FunctionComponent } from "react";
import ChartBody from "./body/ChartBody";
import ChartHeader from "./header/ChartHeader";

export interface ChartProps extends ChartModel { }

const Chart: FunctionComponent<ChartProps> = (props: ChartProps) => (
  <div className={`max-h-screen text-center overflow-x-auto resize-y rounded-md`}>
    <ChartHeader {...props} />
    <ChartBody {...props.body} />
  </div>
);

export default Chart;
