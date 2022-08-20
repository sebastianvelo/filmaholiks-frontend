import Carousel from "client/common/components/carousel/Carousel";
import useWatchlist from "client/hooks/useWatchlist";
import MediaType from "model/common/MediaType";
import { FunctionComponent } from "react";
import { CardHorizontalProps } from "../../../common/components/card-horizontal/CardHorizontal";
import AddListButton from "./add-list-button/AddListButton";
import List, { ListProps } from "./list/List";

export interface WatchlistProps {
    mediaType: MediaType;
    lists: ListProps[];
}

const WatchListEmpty = () => <p className="text-xl text-center font-bold text-red-500">You haven't added a list yet!</p>

const Watchlist: FunctionComponent<WatchlistProps> = (props: WatchlistProps) => {
    const service = useWatchlist(props.mediaType, props.lists);
    const dynamic = true;

    const listService = (list: ListProps, idx: number) => ({
        ...list,
        key: `list${idx}`,
        listIdx: idx,
        dynamic,
        changeListTitle: (title: string) => service.list.changeTitle(idx, title),
        swapLists: (targetListIdx: number) => service.list.swap(idx, targetListIdx),
        deleteList: () => service.list.delete(idx),
        addItem: (item: CardHorizontalProps) => service.item.save(idx, item),
        deleteItem: (itemId: string | number, requiresConfirmation?: boolean) => service.item.delete(idx, itemId, requiresConfirmation),
        deleteItemOfOtherList: (listIdx: number, itemId: string | number) => service.item.delete(listIdx, itemId, true),
        swapItems: (itemAIdx: number, itemBIdx: number) => service.item.swap(idx, itemAIdx, itemBIdx),
        moveItem: service.item.move,
        searchItems: service.item.search,
    });

    const lists = service.list.value?.map((list, idx: number) => (
        <List {...listService(list, idx)}
        />
    ));

    return (
        <>
            <div className="hidden md:block space-y-4">
                {service.list.value?.length === 0 && <WatchListEmpty />}
                <Carousel id="watchlist">
                    {lists}
                </Carousel>
                {dynamic && <AddListButton addList={service.list.add} />}
            </div>
            <div className="md:hidden space-y-4">
                {lists}
            </div>
        </>
    );
}

export default Watchlist;