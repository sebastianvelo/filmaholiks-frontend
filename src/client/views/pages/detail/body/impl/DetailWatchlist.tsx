import Headline from "client/common/atom/headline/Headline";
import TabsContainer from "client/common/components/modern-tabs/TabsContainer";
import { LineDivider } from "client/common/components/svg/Svg";
import WatchlistSection, { WatchlistSectionProps } from "client/views/components/watch-list/WatchlistSection";

export interface DetailWatchlistProps {
    watchlists?: WatchlistSectionProps[];
}

const DetailWatchlist: React.FC<DetailWatchlistProps> = (props: DetailWatchlistProps) => (
    props.watchlists ?
        (
            <div className="mt-6 space-y-4">
                <Headline className={`text-2xl md:text-4xl text-center lg:text-left`}>
                    My lists
                </Headline>
                <TabsContainer tabs={props.watchlists?.map(tab => ({
                    id: `chart-${tab.title}`,
                    content: (
                        <div className="p-8" key={`wl-${tab.title}`}>
                            <WatchlistSection {...tab} />
                            <LineDivider />
                        </div>
                    ),
                    label: tab.title
                }))} />
            </div>
        ) :
        <></>
);

export default DetailWatchlist;