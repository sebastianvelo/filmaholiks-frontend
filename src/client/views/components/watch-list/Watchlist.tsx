import Carousel from "@components/carousel/Carousel";
import { UseList } from "@hooks/useList";
import { UseWatchlist } from "@hooks/useWatchlist";
import TabsContainer from "client/common/components/modern-tabs/TabsContainer";
import { FunctionComponent } from "react";
import MediaType from "shared/types/MediaType";
import WatchlistColumn, { WatchlistColumnProps } from "./list/WatchlistColumn";

export interface WatchlistProps {
    mediaType: MediaType;
    lists: WatchlistColumnProps[];
    dynamic?: boolean;
    service: UseWatchlist;
    listService: (idx: number) => UseList;
    isEditing: boolean;
}

const WatchListEmpty = () => <p className="text-xl text-center font-bold text-red-500">Empty!</p>

const Watchlist: FunctionComponent<WatchlistProps> = ({ service, listService, dynamic, isEditing }) => {
    const watchlistColumnProps = (list: WatchlistColumnProps, idx: number) => ({
        ...list,
        key: `column${idx}`,
        listIdx: idx,
        service: listService(idx),
        dynamic,
        isEditing
    })

    return (
        <>
            <div className="hidden xl:block space-y-4">
                {service.list.value?.length === 0 && <WatchListEmpty />}
                <Carousel id="watchlist">
                    {service.list.value?.map((list: WatchlistColumnProps, idx: number) => (
                        <WatchlistColumn {...watchlistColumnProps(list, idx)} />
                    ))}
                </Carousel>
            </div>
            <div className="xl:hidden space-y-4">
                <TabsContainer tabs={
                    service.list.value?.map((list, idx: number) => ({
                        id: `column-${list.title}`,
                        label: list.title,
                        content: <WatchlistColumn {...watchlistColumnProps(list, idx)} />
                    }))
                } />
            </div>
        </>
    );
}

export default Watchlist;