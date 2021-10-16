import { FunctionComponent } from "react";
import ComponentClass from "style/ComponentClass";

export interface TabProps {
    label: string;
    active?: boolean;
}

const Tab: FunctionComponent<TabProps> = (props: TabProps) => {
    return (
        <p className={ComponentClass.TAB(props)}>{props.label}</p>
    );
}

export default Tab;