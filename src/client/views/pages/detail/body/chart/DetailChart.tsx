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
                    tabsClassName="px-2 border-b-2 border-t-2 dark:border-primary border-secondary md:text-2xl bg-primary-dark dark:bg-secondary-dark bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10"
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