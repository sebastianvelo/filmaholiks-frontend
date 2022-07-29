import { FunctionComponent } from "react";
import DetailChart, { DetailChartProps } from "./chart/DetailChart";
import DetailHeader, { DetailProps } from "./detail/DetailHeader";
import DetailSections, { DetailSectionsProps } from "./sections/DetailSections";

export interface DetailPageBodyProps extends DetailSectionsProps, DetailChartProps {
    detail?: DetailProps,
}

const DetailPageBody: FunctionComponent<DetailPageBodyProps> = (props: DetailPageBodyProps) => (
    <section className="h-full w-full justify-center xl:px-28">
        <DetailHeader {...props.detail} />
        <DetailSections {...props} />
        <DetailChart {...props} />
    </section>
);

export default DetailPageBody;