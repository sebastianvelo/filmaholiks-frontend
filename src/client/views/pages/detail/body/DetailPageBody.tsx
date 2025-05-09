import { FunctionComponent } from "react";
import DetailHeader, { DetailHeaderProps } from "./detail/DetailHeader";
import DetailChart, { DetailChartProps } from "./tabs-wrapper/impl/DetailChart";
import DetailSections, { DetailSectionsProps } from "./tabs-wrapper/impl/DetailSections";
import DetailWatchlist, { DetailWatchlistProps } from "./tabs-wrapper/impl/DetailWatchlist";

export interface DetailPageBodyProps extends DetailSectionsProps, DetailChartProps, DetailWatchlistProps {
    detail?: DetailHeaderProps;
}

const DetailPageBody: FunctionComponent<DetailPageBodyProps> = (props: DetailPageBodyProps) => (
    <section className="h-full w-full justify-center">
        <DetailHeader {...props.detail} />
        <DetailSections {...props} />
        <DetailChart {...props} />
        <DetailWatchlist {...props} />
    </section>
);

export default DetailPageBody;