import { FunctionComponent } from "react";
import Tailwind from "@tailwind-helper/Tailwind";

export interface TabProps {
    label: string;
    active?: boolean;
}

const Tab: FunctionComponent<TabProps> = (props: TabProps) => {
    const className = Tailwind.builder()
        .add('px-6 py-4 mb-2 transition-border-color duration-300 border-b-4 md:w-auto text-sm text-center text-2xl')
        .add("dark:text-white text-black w-40")
        .addIf('text-secondary-900 border-secondary-500 dark:border-primary-500 dark:text-primary-500 font-bold', props.active)
        .addIf('border-transparent hover:text-secondary-900 hover:border-secondary-500 dark:hover:text-primary-500 dark:hover:border-primary-500', !props.active)
        .build();

    return (
        <p className={className}>{props.label}</p>
    );
}

export default Tab;