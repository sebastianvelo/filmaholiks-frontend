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

    return (
        <>
            <AddListButton addColumn={service.list.add} />
            <Carousel id="watchlist">
                {service.list.value?.map((column, idx: number) => (
                    <List {...column}
                        key={column.title}
                        listIdx={idx}
                        swapLists={(targetListIdx: number) => service.list.swap(idx, targetListIdx)}
                        swapItems={(itemIdx: number, targetItemIdx: number) => service.item.swap(idx, itemIdx, targetItemIdx)}
                        deleteColumn={() => service.list.delete(idx)}
                        addItem={(item: ItemProps) => service.item.add(idx, item)}
                        changeTitle={(title: string) => service.list.changeTitle(idx, title)}
                        deleteItem={(cardIdx: number, requiresConfirmation?: boolean) => service.item.delete(!!requiresConfirmation, idx, cardIdx)}
                        deleteItemOfOtherList={(columnIdx: number, cardIdx: number) => service.item.delete(true, columnIdx, cardIdx)}
                    />
                ))}
            </Carousel>
        </>
    );
}

export default Lists;