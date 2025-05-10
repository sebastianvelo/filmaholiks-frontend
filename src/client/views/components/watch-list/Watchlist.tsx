import Carousel from "@components/carousel/Carousel";
import { UseList } from "@hooks/useList";
import { UseWatchlist } from "client/hooks/useWatchlist";
import { FunctionComponent } from "react";
import MediaType from "shared/types/MediaType";
import WatchlistColumn, { WatchlistColumnProps } from "./list/WatchlistColumn";

export interface WatchlistProps {
    mediaType: MediaType;
    lists: WatchlistColumnProps[];
    dynamic?: boolean;
    service: UseWatchlist;
    listService: (idx: number) => UseList;
}

const WatchListEmpty = () => <p className="text-xl text-center font-bold text-red-500">Empty!</p>

const Watchlist: FunctionComponent<WatchlistProps> = ({ service, listService, dynamic }) => {

    const columns = service.list.value?.map((list, idx: number) => (
        <WatchlistColumn {...list} key={`column${idx}`} listIdx={idx} service={listService(idx)} dynamic={dynamic} />
    ));

    return (
        <>
            <div className="hidden md:block space-y-4">
                {service.list.value?.length === 0 && <WatchListEmpty />}
                <Carousel id="watchlist">
                    {columns}
                </Carousel>
            </div>
            <div className="md:hidden space-y-4">
                {columns}
            </div>
        </>
    );
}

export default Watchlist;