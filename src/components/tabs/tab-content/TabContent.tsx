import { FunctionComponent } from "react";
import ComponentClass from "style/ComponentClass";

export interface TabContentProps {
    children: React.ReactNode;
    active?: boolean;
}

const TabContent: FunctionComponent<TabContentProps> = (props: TabContentProps) => {
    return (
        <div className={ComponentClass.TAB_CONTENT(props)}>{props.children}</div>
    );
}

export default TabContent;