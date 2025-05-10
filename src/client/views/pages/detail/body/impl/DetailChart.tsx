import Headline from "client/common/atom/headline/Headline";
import { LineDivider } from "client/common/components/svg/Svg";
import ChartSection, { ChartSectionProps } from "client/views/components/section/impl/chart/ChartSection";
import { FunctionComponent } from "react";

export interface DetailChartProps {
    charts?: ChartSectionProps[];
}

const DetailChart: FunctionComponent<DetailChartProps> = (props: DetailChartProps) => (
    props.charts ?
        (
            <div className="overflow-y-auto scrollbar">
                {props.charts?.map(chart => (
                    <div className="space-y-6" key={chart.title}>
                        <Headline className={`text-2xl md:text-4xl text-center lg:text-left`}>{chart.title}</Headline>
                        <ChartSection chart={chart.chart} />
                        <LineDivider />
                    </div>
                ))}
            </div>
        ) :
        <></>
)

export default DetailChart;