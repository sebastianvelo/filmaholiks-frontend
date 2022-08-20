import Loading from "client/common/components/loading/Loading";
import Tailwind from "client/common/tailwind/Tailwind";
import WatchlistHelper from "client/helper/WatchlistHelper";
import { FunctionComponent } from "react";
import ActionableCard from "../../actionable-item/ActionableCard";
import { CardHorizontalProps } from "../../../../../../common/components/card-horizontal/CardHorizontal";

interface ListSearchResultsProps {
    items?: CardHorizontalProps[] | null;
    loading?: boolean;
    addItem: (item: CardHorizontalProps) => void;
    deleteItem: (listIdx: number, itemId: string | number, requiresConfirmation?: boolean) => void;
}

const ListSearchResults: FunctionComponent<ListSearchResultsProps> = (props: ListSearchResultsProps) => {
    const loadingClassName = Tailwind.builder()
        .addIf("bg-black", props.loading)
        .add("hidden group-hover:flex w-96 h-screen z-40 flex items-center justify-center absolute left-0")
        .build();

    const boxClassName = Tailwind.builder()
        .add("z-40 overflow-y-scroll h-2/3 top-0 absolute")
        .add("space-y-4")
        .add("text-center lg:text-left")
        .add("bg-primary-lighter dark:bg-black bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 dark:bg-opacity-30")
        .build();

    return (
        <div className={loadingClassName}>
            <Loading loading={props.loading}>
                {props.items && (
                    <section className={boxClassName} >
                        {props.items?.map((item: CardHorizontalProps, idx: number) => {
                            const it = WatchlistHelper.fromLocalStorage.item.retrieveIdx(item.title);
                            const action = () => it ? props.deleteItem(it.listIdx, item.id) : props.addItem(item);
                            return <ActionableCard
                                key={item.title}
                                idx={idx}
                                item={item}
                                delete={!!it}
                                action={action}
                            />;
                        })}
                    </section>
                )}
            </Loading>
        </div>
    );
}

export default ListSearchResults;