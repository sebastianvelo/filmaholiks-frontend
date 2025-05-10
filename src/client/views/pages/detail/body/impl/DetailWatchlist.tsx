import { LineDivider } from "client/common/components/svg/Svg";
import WatchlistSection from "client/views/components/section/impl/watch-list/WatchlistSection";
import { WatchlistProps } from "client/views/components/watch-list/Watchlist";
import { FunctionComponent } from "react";

export interface WatchlistTabProps extends WatchlistProps {
    title: string;
}

export interface DetailWatchlistProps {
    watchlists?: WatchlistTabProps[];
}

const DetailWatchlist: FunctionComponent<DetailWatchlistProps> = (props: DetailWatchlistProps) => {

    return (
        props.watchlists ?
            (
                <div className="mt-36 space-y-4">
                    {props.watchlists.map((tab, idx) => (
                        <>
                            <WatchlistSection key={tab.title} {...tab} />
                            <LineDivider />
                        </>
                    ))}
                </div>
            ) :
            <></>
    )
}

export default DetailWatchlist;