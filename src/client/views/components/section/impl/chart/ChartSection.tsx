import Chart, { ChartProps } from "client/views/components/chart/Chart";
import { FunctionComponent } from "react";
import Section from "../../Section";

export interface ChartSectionProps {
    title?: string;
    chart: ChartProps;
}

const ChartSection: FunctionComponent<ChartSectionProps> = (props: ChartSectionProps) => (
    <Section title={props.title}>
        <Chart {...props.chart} />
    </Section>
);

export default ChartSection;