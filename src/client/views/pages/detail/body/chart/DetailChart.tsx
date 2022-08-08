import Tabs from "client/common/components/tabs/Tabs";
import ChartSection, { ChartSectionProps } from "client/views/components/sections/chart-section/ChartSection";
import { FunctionComponent } from "react";

export interface DetailChartProps {
    charts?: ChartSectionProps[];
}

const DetailChart: FunctionComponent<DetailChartProps> = (props: DetailChartProps) => (
    props.charts ?
        (
            <div className=" overflow-y-auto">
                <Tabs
                    className="border border-primary divide-y-2 divide-primary-dark"
                    tabsClassName="md:text-2xl bg-gradient-to-r from-black to-secondary-dark"
                    tabs={props.charts?.map(chart => ({
                        content: <ChartSection chart={chart.chart} key={chart.title} />,
                        label: chart.title ?? "error"
                    }))}
                />
            </div>
        ) :
        <></>
)

export default DetailChart;