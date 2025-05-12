import Carousel from "@components/carousel/Carousel";
import TabsContainer from "client/common/components/modern-tabs/TabsContainer";
import Section from "../section/Section";
import WatchlistColumn, { WatchlistColumnProps } from "./list/WatchlistColumn";

export interface StaticWatchlistProps {
    title: string;
    lists: WatchlistColumnProps[];
}

const WatchListEmpty = () => <p className="text-xl text-center font-bold text-red-500">Empty!</p>

const StaticWatchlist: React.FC<StaticWatchlistProps> = ({ title, lists }) => {
    const watchlistColumnProps = (list: WatchlistColumnProps, idx: number) => ({
        ...list,
        key: `column${idx}`,
        listIdx: idx,
        dynamic: false,
    })

    return (
        <Section title={title}>
            <div className="hidden xl:block space-y-4">
                {lists?.length === 0 && <WatchListEmpty />}
                <Carousel id="watchlist">
                    {lists?.map((list: WatchlistColumnProps, idx: number) => (
                        <WatchlistColumn {...watchlistColumnProps(list, idx)} />
                    ))}
                </Carousel>
            </div>
            <div className="xl:hidden space-y-4">
                <TabsContainer tabs={
                    lists?.map((list, idx: number) => ({
                        id: `column-${list.title}`,
                        label: list.title,
                        content: <WatchlistColumn {...watchlistColumnProps(list, idx)} />
                    }))
                } />
            </div>
        </Section>
    );
}

export default StaticWatchlist;