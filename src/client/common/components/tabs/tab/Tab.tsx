import { FunctionComponent } from "react";
import Tailwind from "client/common/tailwind/Tailwind";

export interface TabProps {
    label: string;
    active?: boolean;
}

const Tab: FunctionComponent<TabProps> = (props: TabProps) => {
    const className = Tailwind.builder()
        .add('px-6 py-4 transition-border-color duration-300 border-b-8 w-28 md:w-auto text-sm md:text-2xl')
        .addIf('border-primary-dark text-primary-dark', props.active)
        .addIf('border-transparent', !props.active)
        .build();
    return (
        <p className={className}>{props.label}</p>
    );
}

export default Tab;