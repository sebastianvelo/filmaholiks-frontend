import Tabs from "@components/tabs/Tabs";
import Tailwind from "@tailwind-helper/Tailwind";
import { FunctionComponent } from "react";

export type TabType = {
    label: string;
    content: React.ReactNode | React.ReactNode[];
}

interface TabsWrapperProps {
    tabs: TabType[];
}

const TabsWrapper: FunctionComponent<TabsWrapperProps> = (props: TabsWrapperProps) => {
    const tabsClassName = Tailwind.builder()
        .add("px-2 md:text-2xl rounded-tl-md rounded-tr-md")
        .add("dark:border-primary-500 border-secondary-500")
        .add("bg-secondary-100/50 dark:bg-primary-900/30")
        .add("bg-clip-padding backdrop-blur-md")
        .build();

    return (
        <Tabs
            tabsClassName={tabsClassName}
            tabs={props.tabs}
        />
    );
}

export default TabsWrapper;