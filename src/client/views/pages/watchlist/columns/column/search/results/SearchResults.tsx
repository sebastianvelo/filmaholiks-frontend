import Loading from "client/common/components/loading/Loading";
import Section from "client/views/components/section/Section";
import { FunctionComponent } from "react";
import ActionableItem from "../../actionable-item/ActionableItem";
import { ItemProps } from "../../actionable-item/item/Item";

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
                    <Section title="Results">
                        {props.items?.map((item: ItemProps) => <ActionableItem item={item} action={() => props.addCard(item)} />)}
                    </Section>
                )}
            </Loading>
        </div>
    );
}

export default SearchResults;