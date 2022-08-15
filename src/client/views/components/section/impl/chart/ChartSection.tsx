import Chart from "client/views/components/chart/Chart";
import { ChartSectionModel } from "model/components/section/Section";
import { FunctionComponent } from "react";
import Section from "../../Section";

export interface ChartSectionProps extends ChartSectionModel { }

const ChartSection: FunctionComponent<ChartSectionProps> = (props: ChartSectionProps) => (
    <Section title={props.title}>
        <Chart {...props.chart} />
    </Section>
);

export default ChartSection;