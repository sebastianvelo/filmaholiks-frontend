import Button from "components/action/button/Button";
import { FunctionComponent, useState } from "react";
import ComponentClass from "style/ComponentClass";
import ComponentStyle from "style/ComponentStyle";
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

    return (
        <div className={ComponentClass.TABS_WRAPPER(props)}>
            <div className={ComponentStyle.TABS}>
                {props.tabs.map((tab, i) => (
                    <Button onClick={() => setTabActive(i)}>
                        <Tab label={tab.label} key={i} active={tabActive === i} />
                    </Button>
                ))}
            </div>
            <div className={ComponentStyle.TAB_CONTENT_WRAPPER}>
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