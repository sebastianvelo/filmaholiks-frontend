import TabsContainer from "client/common/components/modern-tabs/TabsContainer";
import ChartSection, { ChartSectionProps } from "client/views/components/section/impl/chart/ChartSection";
import { FunctionComponent } from "react";
import TabsWrapper from "../TabsWrapper";

export interface DetailChartProps {
    charts?: ChartSectionProps[];
}

const DetailChart: FunctionComponent<DetailChartProps> = (props: DetailChartProps) => (
    props.charts ?
        (
            <div className="overflow-y-auto">
                <TabsContainer
                    tabs={props.charts?.map(chart => ({
                        id: `tab-${chart.title}`,
                        content: <ChartSection chart={chart.chart} key={chart.title} />,
                        label: chart.title ?? "error"
                    }))}
                />
            </div>
        ) :
        <></>
)

export default DetailChart;