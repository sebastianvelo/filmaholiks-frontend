import Carousel from "client/common/components/carousel/Carousel";
import useWatchlist from "client/hooks/useWatchlist";
import Section from "client/views/components/section/Section";
import { FunctionComponent } from "react";
import AddListButton from "./add-list-button/AddListButton";
import { ItemProps } from "./list/actionable-item/item/Item";
import List, { ListProps } from "./list/List";

interface ListsProps {
    title: string;
    lists: ListProps[];
}

const Lists: FunctionComponent<ListsProps> = (props: ListsProps) => {
    const service = useWatchlist(props.lists);

    const listService = (list: ListProps, idx: number) => ({
        ...list,
        key: `list${idx}`,
        listIdx: idx,
        changeListTitle: (title: string) => service.list.changeTitle(idx, title),
        swapLists: (targetListIdx: number) => service.list.swap(idx, targetListIdx),
        deleteList: () => service.list.delete(idx),
        addItem: (item: ItemProps) => service.item.save(idx, item),
        moveItem: (item: ItemProps, sourceListIdx: number, sourceItemIdx: number) => service.item.move(item, sourceListIdx, sourceItemIdx, idx,),
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
                <Section title={props.title}>
                    <Carousel id="watchlist">
                        {lists}
                    </Carousel>
                </Section>
            </div>
            <div className="md:hidden space-y-4">
                {lists}
            </div>
            <AddListButton addList={service.list.add} />
        </>
    );
}

export default Lists;