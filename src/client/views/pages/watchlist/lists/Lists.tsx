import Carousel from "client/common/components/carousel/Carousel";
import useWatchlist from "client/hooks/useWatchlist";
import { FunctionComponent } from "react";
import AddListButton from "./add-list-button/AddListButton";
import { ItemProps } from "./list/actionable-item/item/Item";
import List, { ListProps } from "./list/List";

interface ListsProps {
    lists: ListProps[];
}

const Lists: FunctionComponent<ListsProps> = (props: ListsProps) => {
    const service = useWatchlist(props.lists);

    const lists = service.list.value?.map((list, idx: number) => (
        <List {...list}
            key={list.title}
            listIdx={idx}
            changeTitle={(title: string) => service.list.changeTitle(idx, title)}
            swapLists={(targetListIdx: number) => service.list.swap(idx, targetListIdx)}
            deleteList={() => service.list.delete(idx)}
            moveItem={(item: ItemProps, sourceListIdx: number, sourceItemIdx: number) => service.item.move(item, sourceListIdx, sourceItemIdx, idx,)}
            addItem={(item: ItemProps) => service.item.add(idx, item)}
            deleteItem={(cardIdx: number, requiresConfirmation?: boolean) => service.item.delete(!!requiresConfirmation, idx, cardIdx)}
            deleteItemOfOtherList={(listIdx: number, cardIdx: number) => service.item.delete(true, listIdx, cardIdx)}
            swapItems={(itemAIdx: number, itemBIdx: number) => service.item.swap(idx, itemAIdx, itemBIdx)}
        />
    ));
    return (
        <>
            <AddListButton addList={service.list.add} />
            <div className="hidden md:block">
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

export default Lists;