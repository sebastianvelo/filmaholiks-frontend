import WatchlistPageRequest from "api/request/pages/WatchlistPageRequest";
import Input from "client/common/components/form/input/Input";
import Headline from "client/common/components/headline/Headline";
import Loading from "client/common/components/loading/Loading";
import useFetch from "client/hooks/useFetch";
import { FunctionComponent, useState } from "react";
import { ItemProps } from "../item/Item";
import Suggestion from "./suggestion/Suggestion";

interface SearchProps {
    addCard: (item: ItemProps) => void
}

const SearchSuggestions: FunctionComponent<SearchProps> = (props: SearchProps) => {
    const [url, setUrl] = useState(WatchlistPageRequest.showsSuggestions(''));
    const suggestions = useFetch<ItemProps[]>(url);

    const handleSearch = (e: any) => {
        if (e.target.value.length > 3) {
            setUrl(WatchlistPageRequest.showsSuggestions(e.target.value));
        }
    };

    const getWrapperClassName = () => suggestions?.loading ? "w-full flex items-center h-96 justify-center absolute" : "";

    return (
        <div className={`group h-full relative`}>
            <Input placeholder={`Add show`} onChange={handleSearch} />
            <div className={getWrapperClassName()}>
                <Loading loading={suggestions?.loading}>
                    {suggestions?.data && (
                        <div className="space-y-4 bg-gradient-to-b from-secondary-dark to-black group-hover:block hidden w-full absolute h-96 overflow-y-auto p-2">
                            <Headline className="text-2xl text-primary-light border-b-2 border-primary-dark">Results</Headline>
                            {suggestions?.data?.map((suggestion: any) => <Suggestion suggestion={suggestion} addCard={props.addCard} />)}
                        </div>
                    )}
                </Loading>
            </div>
        </div>
    );
}

export default SearchSuggestions;