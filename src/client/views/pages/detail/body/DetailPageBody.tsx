import { FunctionComponent } from "react";
import DetailChart, { DetailChartProps } from "./chart/DetailChart";
import DetailHeader, { DetailHeaderProps } from "./detail/DetailHeader";
import DetailSections, { DetailSectionsProps } from "./sections/DetailSections";

export interface DetailPageBodyProps extends DetailSectionsProps, DetailChartProps {
    detail?: DetailHeaderProps,
}

const DetailPageBody: FunctionComponent<DetailPageBodyProps> = (props: DetailPageBodyProps) => (
    <section className="h-full w-full justify-center 2xl:px-16">
        <DetailHeader {...props.detail} />
        <DetailSections {...props} />
        <DetailChart {...props} />
    </section>
);

export default DetailPageBody;