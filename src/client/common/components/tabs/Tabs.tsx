import Button from "client/common/components/action/button/Button";
import { FunctionComponent, useState } from "react";
import Tailwind from "client/common/tailwind/Tailwind";
import TabContent from "./tab-content/TabContent";
import Tab from "./tab/Tab";

export interface TabsProps {
    tabs: {
        label: string;
        content: React.ReactNode | React.ReactNode[];
    }[];
    className?: string;
}

const Tabs: FunctionComponent<TabsProps> = (props: TabsProps) => {
    const [tabActive, setTabActive] = useState<number>(0);
    const className = Tailwind.builder()
        .add('overflow-x-scroll')
        .add(props.className)
        .build();
    return (
        <div className={className}>
            <div className={'flex'}>
                {props.tabs.map((tab, i) => (
                    <Button onClick={() => setTabActive(i)}>
                        <Tab label={tab.label} key={i} active={tabActive === i} />
                    </Button>
                ))}
            </div>
            <div className={'py-4'}>
                {props.tabs.map((tab, i) =>
                    <TabContent key={i} active={tabActive === i}>
                        {tab.content}
                    </TabContent>
                )}
            </div>
        </div>
    );
}

export default Tabs;