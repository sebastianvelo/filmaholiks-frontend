import Carousel from "@components/carousel/Carousel";
import useList from "@hooks/useList";
import { FunctionComponent } from "react";
import MediaType from "shared/types/MediaType";
import AddListButton from "./add-list-button/AddListButton";
import List, { ListProps } from "./list/List";

export interface WatchlistProps {
    mediaType: MediaType;
    lists: ListProps[];
    dynamic?: boolean;
}

const WatchListEmpty = () => <p className="text-xl text-center font-bold text-red-500">Empty!</p>

const Watchlist: FunctionComponent<WatchlistProps> = (props: WatchlistProps) => {
    const [service, listService] = useList(props.mediaType, props.lists);

    const lists = service.list.value?.map((list, idx: number) => (
        <List {...list} key={`list${idx}`} listIdx={idx} service={listService(idx)} dynamic={props.dynamic} />
    ));

    return (
        <>
            <div className="hidden md:block space-y-4">
                {service.list.value?.length === 0 && <WatchListEmpty />}
                <Carousel id="watchlist">
                    {lists}
                </Carousel>
                {props.dynamic && <AddListButton addList={service.list.add} />}
            </div>
            <div className="md:hidden space-y-4">
                {lists}
            </div>
        </>
    );
}

export default Watchlist;