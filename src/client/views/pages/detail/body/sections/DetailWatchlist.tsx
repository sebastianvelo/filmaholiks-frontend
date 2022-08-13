import Watchlist, { WatchlistProps } from "client/views/components/watch-list/Watchlist";
import { FunctionComponent } from "react";
import TabsWrapper from "./TabsWrapper";

export interface DetailWatchlistProps {
    watchlists?: {
        title: string;
        lists: WatchlistProps; 
    }[];
}

const DetailWatchlist: FunctionComponent<DetailWatchlistProps> = (props: DetailWatchlistProps) => (
    props.watchlists ?
        (
            <div className="overflow-y-auto">
                <TabsWrapper
                    tabs={props.watchlists?.map(list => ({
                        content: <Watchlist {...list.lists} key={list.title} />,
                        label: list.title ?? "error"
                    }))}
                />
            </div>
        ) :
        <></>
)

export default DetailWatchlist;