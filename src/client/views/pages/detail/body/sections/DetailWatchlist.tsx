import Section from "client/views/components/section/Section";
import Watchlist, { WatchlistProps } from "client/views/components/watch-list/Watchlist";
import { FunctionComponent } from "react";
import TabsWrapper from "./TabsWrapper";

export interface WatchlistTabProps extends WatchlistProps {
    title: string;
}

export interface DetailWatchlistProps {
    watchlists?: WatchlistTabProps[];
}

const DetailWatchlist: FunctionComponent<DetailWatchlistProps> = (props: DetailWatchlistProps) => (
    props.watchlists ?
        (
            <>
                <TabsWrapper
                    tabs={props.watchlists.map((tab) => ({
                        label: tab.title,
                        content: (
                            <Section>
                                <Watchlist {...tab} />
                            </Section>
                        )
                    }))} />
            </>
        ) :
        <></>
)

export default DetailWatchlist;