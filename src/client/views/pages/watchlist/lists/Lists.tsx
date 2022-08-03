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
            <AddListButton addColumn={service.lists.add} />
            <Carousel id="watchlist">
                {service.lists.value?.map((column, idx: number) => (
                    <List {...column}
                        key={column.title}
                        idx={idx}
                        swapLists={(target: number) => service.lists.swap(idx, target)}
                        deleteColumn={() => service.lists.delete(idx)}
                        addCard={(item: ItemProps) => service.cards.add(idx, item)}
                        changeTitle={(title: string) => service.lists.changeTitle(idx, title)}
                        deleteCard={(cardIdx: number, requiresConfirmation?: boolean) => service.cards.delete(!!requiresConfirmation, idx, cardIdx)}
                    />
                ))}
            </Carousel>
        </>
    );
}

export default Lists;