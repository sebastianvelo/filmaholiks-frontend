import { FunctionComponent } from "react";
import Chart, { ChartProps } from "../../chart/Chart";
import Section from "../../section/Section";

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