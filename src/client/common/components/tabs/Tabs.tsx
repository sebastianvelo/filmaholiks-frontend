import Button from "client/common/atom/action/button/Button";
import Tailwind from "@tailwind-helper/Tailwind";
import { TabType } from "client/views/pages/detail/body/tabs-wrapper/TabsWrapper";
import { FunctionComponent, useState } from "react";
import TabContent from "./tab-content/TabContent";
import Tab from "./tab/Tab";

export interface TabsProps {
    tabs: TabType[];
    className?: string;
    tabsClassName?: string;
}

const Tabs: FunctionComponent<TabsProps> = (props: TabsProps) => {
    const [tabActive, setTabActive] = useState<number>(0);
    const className = Tailwind.builder()
        .add(props.className)
        .build();

    const tabsClassName = Tailwind.builder()
        .add("flex space-x-4 overflow-x-auto")
        .add(props.tabsClassName)
        .build();

    return (
        <div className={className}>
            <div className={tabsClassName}>
                {props.tabs.map((tab, i) => (
                    <Button onClick={() => setTabActive(i)} key={`tabHeader-${tab.label}`}>
                        <Tab label={tab.label} key={i} active={tabActive === i} />
                    </Button>
                ))}
            </div>
            <div>
                {props.tabs.map((tab, i) =>
                    <TabContent active={tabActive === i} key={`tabContent-${tab.label}`}>
                        {tab.content}
                    </TabContent>
                )}
            </div>
        </div>
    );
}

export default Tabs;