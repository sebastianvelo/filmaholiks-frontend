import Loading from "@components/loading/Loading";
import Tailwind from "@tailwind-helper/Tailwind";
import { FunctionComponent } from "react";
import { CardHorizontalProps } from "../../../../../../common/components/card-horizontal/CardHorizontal";
import ActionableCard, { ActionableCardProps } from "../../actionable-item/ActionableCard";

interface ListSearchResultsProps {
    items?: ActionableCardProps[] | null;
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
        .add("bg-primary-50 dark:bg-black bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 dark:bg-opacity-30")
        .build();

    return (
        <div className={loadingClassName}>
            <Loading loading={props.loading}>
                {props.items && (
                    <section className={boxClassName} >
                        {props.items?.map((actionableItem: ActionableCardProps, idx: number) => {
                            const action = () => actionableItem.delete ? props.deleteItem(idx, actionableItem.item.id) : props.addItem(actionableItem.item);
                            return <ActionableCard
                                {...actionableItem}
                                key={actionableItem.item.title}
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