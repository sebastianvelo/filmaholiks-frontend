import Carousel from "client/common/components/carousel/Carousel";
import useWatchlist from "client/hooks/useWatchlist";
import { FunctionComponent } from "react";
import AddListButton from "./add-list-button/AddListButton";
import { CardHorizontalProps } from "../../../common/components/card-horizontal/CardHorizontal";
import List, { ListProps } from "./list/List";

export interface WatchlistProps {
    lists: ListProps[];
}

const WatchListEmpty = () => <p className="text-xl text-center font-bold text-red-500">You haven't added a list yet!</p>

const Watchlist: FunctionComponent<WatchlistProps> = (props: WatchlistProps) => {
    const service = useWatchlist(props.lists);
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
        moveItem: service.item.move,
        deleteItem: (itemId: string | number, requiresConfirmation?: boolean) => service.item.delete(idx, itemId, requiresConfirmation),
        deleteItemOfOtherList: (listIdx: number, itemId: string | number) => service.item.delete(listIdx, itemId, true),
        swapItems: (itemAIdx: number, itemBIdx: number) => service.item.swap(idx, itemAIdx, itemBIdx),

    });

    const lists = service.list.value?.map((list, idx: number) => (
        <List {...listService(list, idx)}
        />
    ));

    return (
        <>
            <div className="hidden md:block space-y-4">
                {dynamic && <AddListButton addList={service.list.add} />}
                {service.list.value?.length === 0 && <WatchListEmpty />}
                <Carousel id="watchlist">
                    {lists}
                </Carousel>
            </div>
            <div className="md:hidden space-y-4">
                {lists}
            </div>
        </>
    );
}

export default Watchlist;