import Carousel from "client/common/components/carousel/Carousel";
import useWatchlist from "client/hooks/useWatchlist";
import { FunctionComponent } from "react";
import AddListButton from "./add-list-button/AddListButton";
import { CardHorizontalProps } from "../../../common/components/card-horizontal/CardHorizontal";
import List, { ListProps } from "./list/List";

export interface WatchlistProps {
    lists: ListProps[];
}

const Watchlist: FunctionComponent<WatchlistProps> = (props: WatchlistProps) => {
    const service = useWatchlist(props.lists);

    const listService = (list: ListProps, idx: number) => ({
        ...list,
        key: `list${idx}`,
        listIdx: idx,
        changeListTitle: (title: string) => service.list.changeTitle(idx, title),
        swapLists: (targetListIdx: number) => service.list.swap(idx, targetListIdx),
        deleteList: () => service.list.delete(idx),
        addItem: (item: CardHorizontalProps) => service.item.save(idx, item),
        moveItem: (item: CardHorizontalProps, sourceListIdx: number, sourceItemIdx: number) => service.item.move(item, sourceListIdx, sourceItemIdx, idx,),
        deleteItem: (itemIdx: number, requiresConfirmation?: boolean) => service.item.delete(idx, itemIdx, requiresConfirmation),
        deleteItemOfOtherList: (listIdx: number, itemIdx: number) => service.item.delete(listIdx, itemIdx, true),
        swapItems: (itemAIdx: number, itemBIdx: number) => service.item.swap(idx, itemAIdx, itemBIdx),

    });

    const lists = service.list.value?.map((list, idx: number) => (
        <List {...listService(list, idx)}
        />
    ));

    return (
        <>
            <div className="hidden md:block">
                <Carousel id="watchlist">
                    {lists}
                </Carousel>
                <AddListButton addList={service.list.add} />
            </div>
            <div className="md:hidden space-y-4">
                {lists}
            </div>
        </>
    );
}

export default Watchlist;