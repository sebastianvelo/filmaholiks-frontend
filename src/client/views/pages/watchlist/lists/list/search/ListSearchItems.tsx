import WatchlistPageRequest from "api/request/pages/WatchlistPageRequest";
import Input from "client/common/components/form/input/Input";
import useFetch from "client/hooks/useFetch";
import { FunctionComponent, useState } from "react";
import { ItemProps } from "../actionable-item/item/Item";
import ListSearchResults from "./results/ListSearchResults";

export interface ListSearchItemsProps {
    addItem: (item: ItemProps) => void
    deleteItemOfOtherList: (listIdx: number, idx: number, requiresConfirmation?: boolean) => void;
}

const ListSearchItems: FunctionComponent<ListSearchItemsProps> = (props: ListSearchItemsProps) => {
    const [query, setQuery] = useState('');
    const [url, setUrl] = useState(WatchlistPageRequest.showsSuggestions(query));
    const response = useFetch<ItemProps[]>(url);

    const handleSearch = (value: string) => {
        setQuery(value);
        if (value.length > 3) {
            setUrl(WatchlistPageRequest.showsSuggestions(value));
        }
    };

    const addItem = (item: ItemProps) => {
        handleSearch('');
        props.addItem(item);
    };

    const deleteItem = (listIdx: number, idx: number, requiresConfirmation?: boolean) => {
        handleSearch('');
        props.deleteItemOfOtherList(listIdx, idx, requiresConfirmation);
    }

    return (
        <form className={`group relative w-full`}>
            <Input revert className="w-full bg-secondary-dark" placeholder={`Add show`} onChange={(e) => handleSearch(e.target.value)} />
            <ListSearchResults items={response?.data} loading={response?.loading} addItem={addItem} deleteItem={deleteItem} />
        </form>
    );
}

export default ListSearchItems;