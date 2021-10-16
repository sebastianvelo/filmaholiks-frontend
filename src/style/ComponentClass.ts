import { ActionProps } from "components/action/Action";
import { PillProps } from "components/pill/Pill";
import { TabContentProps } from "components/tabs/tab-content/TabContent";
import { TabProps } from "components/tabs/tab/Tab";
import { TabsProps } from "components/tabs/Tabs";
import ComponentStyle from "./ComponentStyle";
import TailwindClass from "./tailwind/TailwindClass";

const ComponentClass = {
  ACTION: (props: ActionProps) =>
    TailwindClass.builder()
      .add(ComponentStyle.ACTION)
      .add(props.color)
      .add(props.className)
      .build(),
  INPUT: () =>
    TailwindClass.builder()
      .add(ComponentStyle.INPUT)
      .add(ComponentStyle.INPUT_FOCUS)
      .add(ComponentStyle.INPUT_HOVER)
      .build(),
  PILL: (props: PillProps) =>
    TailwindClass.builder()
      .add(ComponentStyle.PILL)
      .add(props.color)
      .add(props.className)
      .build(),
  TAB: (props: TabProps) =>
    TailwindClass.builder()
      .add(ComponentStyle.TAB)
      .addIf(ComponentStyle.TAB_ACTIVE, props.active)
      .build(),
  TAB_CONTENT: (props: TabContentProps) =>
    TailwindClass.builder()
      .addIf(ComponentStyle.TAB_CONTENT_HIDDEN, !props.active)
      .build(),
  TABS_WRAPPER: (props: TabsProps) =>
    TailwindClass.builder()
      .add(props.className)
      .add(ComponentStyle.TABS_WRAPPER)
      .build(),
};

export default ComponentClass;
