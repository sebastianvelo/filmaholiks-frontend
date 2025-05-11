import ChartHeaderCell from "./ChartHeaderCell";

export interface ChartHeaderProps {
    header?: string[];
}

const ChartHeader: React.FC<ChartHeaderProps> = (props: ChartHeaderProps) => (
    <div className="flex">
        <ChartHeaderCell value={`E`} />
        {props.header?.map(value => <ChartHeaderCell key={`chart-header-${value}`} value={value} />)}
    </div>
);

export default ChartHeader;
