import Action from "client/common/components/action/Action";
import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import { FunctionComponent } from "react";
import Item, { ItemProps } from "../../item/Item";

interface SuggestionProps {
    suggestion: ItemProps;
    addCard: (item: ItemProps) => void;
}

const Suggestion: FunctionComponent<SuggestionProps> = (props: SuggestionProps) => (
    <div className="flex">
        <Item {...props.suggestion} />
        <Action
            label="✓"
            onClick={() => props.addCard(props.suggestion)} color={ComponentHovereableColor.SUCCESS}
            className="rounded-tr-xl rounded-br-xl"
        />
    </div>
);

export default Suggestion;