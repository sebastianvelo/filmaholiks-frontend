import { ChartSectionModel } from "@model/components/section/Section";
import Chart from "client/views/components/chart/Chart";
import Section from "../section/Section";

export interface ChartSectionProps extends ChartSectionModel { }

const ChartSection: React.FC<ChartSectionProps> = (props: ChartSectionProps) => (
    <Section title={props.title}>
        <Chart {...props.chart} />
    </Section>
);

export default ChartSection;