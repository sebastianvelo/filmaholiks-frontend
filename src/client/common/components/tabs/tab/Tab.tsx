import { FunctionComponent } from "react";
import Tailwind from "client/common/tailwind/Tailwind";

export interface TabProps {
    label: string;
    active?: boolean;
}

const Tab: FunctionComponent<TabProps> = (props: TabProps) => {
    const className = Tailwind.builder()
        .add('px-6 py-4 mb-2 transition-border-color duration-300 border-b-4 md:w-auto text-sm text-center text-2xl')
        .add("dark:text-white text-black w-40")
        .addIf('text-secondary-dark border-secondary dark:border-primary dark:text-primary font-bold', props.active)
        .addIf('border-transparent hover:text-secondary-dark hover:border-secondary dark:hover:text-primary dark:hover:border-primary', !props.active)
        .build();

    return (
        <p className={className}>{props.label}</p>
    );
}

export default Tab;