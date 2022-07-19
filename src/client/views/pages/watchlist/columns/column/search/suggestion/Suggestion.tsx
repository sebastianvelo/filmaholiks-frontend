import Action from "client/common/components/action/Action";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { FunctionComponent } from "react";
import Item, { ItemProps } from "../../item/Item";

interface SuggestionProps {
    suggestion: ItemProps;
    addCard: (item: ItemProps) => void;
}

const Suggestion: FunctionComponent<SuggestionProps> = (props: SuggestionProps) => (
    <div>
        <Item {...props.suggestion} />
        <Action
            className="w-full"
            label="Add card"
            onClick={() => props.addCard(props.suggestion)} color={ComponentHovereableColor.SUCCESS}
        />
    </div>
);

export default Suggestion;