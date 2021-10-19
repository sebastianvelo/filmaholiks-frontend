import { FunctionComponent } from "react";
import Tailwind from "client/common/tailwind/Tailwind";

export interface TabProps {
    label: string;
    active?: boolean;
}

const Tab: FunctionComponent<TabProps> = (props: TabProps) => {
    const className = Tailwind.builder()
        .add('px-6 py-2 transition-border-width duration-100')
        .addIf('border-b-2 border-primary', props.active)
        .build();
    return (
        <p className={className}>{props.label}</p>
    );
}

export default Tab;