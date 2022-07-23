import Headline from "client/common/components/headline/Headline";
import Loading from "client/common/components/loading/Loading";
import { FunctionComponent } from "react";
import ActionableItem from "../../actionable-item/ActionableItem";
import { ItemProps } from "../../item/Item";

interface SearchResultsProps {
    items?: ItemProps[] | null;
    loading?: boolean;
    addCard: (item: ItemProps) => void;
}

const SearchResults: FunctionComponent<SearchResultsProps> = (props: SearchResultsProps) => {
    const getWrapperClassName = () => props.loading ? "w-full flex items-center h-96 justify-center absolute" : "";

    return (
        <div className={getWrapperClassName()}>
            <Loading loading={props.loading}>
                {props.items && (
                    <div className="space-y-4 bg-gradient-to-b from-secondary-dark to-black group-hover:block hidden w-full absolute h-96 overflow-y-auto p-2">
                        <Headline className="text-2xl text-primary-light border-b-2 border-primary-dark">Results</Headline>
                        {props.items?.map((item: ItemProps) => <ActionableItem item={item} action={() => props.addCard(item)} />)}
                    </div>
                )}
            </Loading>
        </div>
    );
}

export default SearchResults;