import { CardHorizontalProps } from "@components/card-horizontal/CardHorizontal";
import useFetch from "@hooks/useFetch";
import { AxiosRequestConfig } from "axios";
import SearchBarInput from "client/views/components/common/searchbar/SearchBarInput";
import { useEffect, useState } from "react";
import { ActionableCardProps } from "../../cards/actionable-card/ActionableCard";
import ListSearchResults from "./results/ListSearchResults";

export interface ColumnSearchbarProps {
    title?: string;
    addItem: (item: CardHorizontalProps) => void
    deleteItemOfOtherList: (listIdx: number, itemId: string | number, requiresConfirmation?: boolean) => void;
    searchItems: (query: string) => AxiosRequestConfig<any>;
}

const WatchlistSearchBar: React.FC<ColumnSearchbarProps> = (props: ColumnSearchbarProps) => {
    const [query, setQuery] = useState("");

    const [response, executeFetch] = useFetch<ActionableCardProps[]>(
        props.searchItems(query),
        { lazy: true }
    );

    useEffect(() => {
        if (query.length > 3) {
            executeFetch();
        } else if (response?.data) {
            response.data = null;
        }
    }, [query, executeFetch]);

    const addItem = (item: CardHorizontalProps) => {
        setQuery("");
        props.addItem(item);
    };

    const deleteItem = (listIdx: number, itemId: string | number, requiresConfirmation?: boolean) => {
        setQuery("");
        props.deleteItemOfOtherList(listIdx, itemId, requiresConfirmation);
    }

    return (
        <form className="group relative w-full">
            <SearchBarInput query={query} setQuery={setQuery} placeholder={`Search...`} />
            <ListSearchResults
                items={response?.data}
                loading={response?.loading}
                addItem={addItem}
                deleteItem={deleteItem}
            />
        </form>
    );
}

export default WatchlistSearchBar;