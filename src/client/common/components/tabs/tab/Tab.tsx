import { FunctionComponent } from "react";
import Tailwind from "client/common/tailwind/Tailwind";

export interface TabProps {
    label: string;
    active?: boolean;
}

const Tab: FunctionComponent<TabProps> = (props: TabProps) => {
    const className = Tailwind.builder()
        .add('px-6 py-4 mb-2 transition-border-color duration-300 border-b-8 md:w-auto text-sm text-center text-2xl')
        .addIf('border-primary text-primary', props.active)
        .addIf('border-transparent', !props.active)
        .build();
    return (
        <p className={className}>{props.label}</p>
    );
}

export default Tab;