import { FunctionComponent } from "react";
import TailwindClass from "@client/tailwind/TailwindClass";

export interface TabProps {
    label: string;
    active?: boolean;
}

const Tab: FunctionComponent<TabProps> = (props: TabProps) => {
    const className = TailwindClass.builder()
        .add('px-6 py-2 transition-border-width duration-100')
        .addIf('border-b-2 border-primary', props.active)
        .build();
    return (
        <p className={className}>{props.label}</p>
    );
}

export default Tab;