import { FunctionComponent } from "react";
import TailwindClass from "@client/tailwind/TailwindClass";

export interface TabContentProps {
    children: React.ReactNode;
    active?: boolean;
}

const TabContent: FunctionComponent<TabContentProps> = (props: TabContentProps) => {
    const className = TailwindClass.builder()
        .addIf('hidden', !props.active)
        .build()
    return (
        <div className={className}>{props.children}</div>
    );
}

export default TabContent;