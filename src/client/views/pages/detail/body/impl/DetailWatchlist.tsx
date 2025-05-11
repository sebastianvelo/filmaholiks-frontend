import { LineDivider } from "client/common/components/svg/Svg";
import WatchlistSection, { WatchlistSectionProps } from "client/views/components/watch-list/WatchlistSection";
import { FunctionComponent } from "react";

export interface DetailWatchlistProps {
    watchlists?: WatchlistSectionProps[];
}

const DetailWatchlist: FunctionComponent<DetailWatchlistProps> = (props: DetailWatchlistProps) => (
    props.watchlists ?
        (
            <div className="mt-6 space-y-4">
                {props.watchlists.map((tab, idx) => (
                    <>
                        <WatchlistSection key={tab.title} {...tab} />
                        <LineDivider />
                    </>
                ))}
            </div>
        ) :
        <></>
);

export default DetailWatchlist;