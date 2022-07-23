import Container from "client/common/components/container/Container";
import Headline from "client/common/components/headline/Headline";
import { FunctionComponent } from "react";
import Chart, { ChartProps } from "../chart/Chart";

export interface ChartSectionProps {
    title: string;
    chart: ChartProps;
}

const ChartSection: FunctionComponent<ChartSectionProps> = (props: ChartSectionProps) => (
    <Container className={`space-y-4 bg-gradient-to-tr from-black to-secondary-dark rounded-sm border border-primary-dark`} >
        <Headline className={`text-3xl text-primary-dark`}>{props.title}</Headline>
        <Chart {...props.chart} />
    </Container>
);

export default ChartSection;