import { FunctionComponent } from "react";
import DetailHeader, { DetailHeaderProps } from "./detail/DetailHeader";
import DetailChart, { DetailChartProps } from "./impl/DetailChart";
import DetailSections, { DetailSectionsProps } from "./impl/DetailSections";
import DetailWatchlist, { DetailWatchlistProps } from "./impl/DetailWatchlist";

export interface DetailPageBodyProps extends DetailSectionsProps, DetailChartProps, DetailWatchlistProps {
    detail?: DetailHeaderProps;
}

const DetailPageBody: FunctionComponent<DetailPageBodyProps> = (props: DetailPageBodyProps) => (
    <section className="h-full w-full justify-center">
        <DetailHeader {...props.detail} />
        <div className="md:px-16 lg:px-32">
            <DetailSections {...props} />
            <DetailWatchlist {...props} />
            <DetailChart {...props} />
        </div>
    </section>
);

export default DetailPageBody;