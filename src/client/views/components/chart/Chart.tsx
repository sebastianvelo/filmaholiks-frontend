import ChartModel from "@model/components/ChartModel";
import ChartBody from "./body/ChartBody";
import ChartHeader from "./header/ChartHeader";

export interface ChartProps extends ChartModel { }

const Chart: React.FC<ChartProps> = (props: ChartProps) => (
  <div className={`max-h-screen text-center overflow-x-auto resize-y rounded-md scrollbar`}>
    <ChartHeader {...props} />
    <ChartBody {...props.body} />
  </div>
);

export default Chart;
