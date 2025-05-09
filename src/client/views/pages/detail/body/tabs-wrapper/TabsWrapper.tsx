import Tabs from "client/common/components/tabs/Tabs";
import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";

interface TabsWrapperProps {
    tabs: {
        label: string;
        content: React.ReactNode | React.ReactNode[];
    }[];
}

const TabsWrapper: FunctionComponent<TabsWrapperProps> = (props: TabsWrapperProps) => {
    const tabsClassName = Tailwind.builder()
        .add("px-2 md:text-2xl")
        .add("dark:border-primary-500 border-secondary-500")
        .add("bg-secondary-200 dark:bg-black")
        .add("bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 dark:bg-opacity-70")
        .build();

    return (
        <Tabs
            tabsClassName={tabsClassName}
            tabs={props.tabs}
        />
    );
}

export default TabsWrapper;