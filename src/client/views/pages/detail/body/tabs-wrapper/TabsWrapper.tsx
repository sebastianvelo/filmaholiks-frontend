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
        .add("dark:border-primary border-secondary")
        .add("bg-secondary-lighter dark:bg-black")
        .build();

    return (
        <Tabs
            tabsClassName={tabsClassName}
            tabs={props.tabs}
        />
    );
}

export default TabsWrapper;