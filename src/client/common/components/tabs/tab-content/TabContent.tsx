import { FunctionComponent } from "react";
import Tailwind from "client/common/tailwind/Tailwind";

export interface TabContentProps {
    children: React.ReactNode;
    active?: boolean;
}

const TabContent: FunctionComponent<TabContentProps> = (props: TabContentProps) => {
    const className = Tailwind.builder()
        .addIf('hidden', !props.active)
        .build()
    return (
        <div className={className}>{props.children}</div>
    );
}

export default TabContent;