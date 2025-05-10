import React from "react";
import TabButton, { TabButtonProps } from "./TabButton";
import { Tab } from "./TabsContainer";

export interface TabListProps {
  tabs: Tab[];
  currentIndex: number;
  onChange: (index: number) => void;
  className?: string;
  inline?: boolean;
  Button?: React.FC<TabButtonProps>;
}

const Tabs: React.FC<TabListProps> = ({ tabs, currentIndex, onChange, className = "", inline, Button = TabButton }) => {

  return (
    <div className={`${className} flex justify-start md:justify-between px-2 backdrop-blur-xl rounded-tr-lg rounded-tl-lg overflow-x-auto scrollbar`}>
      <div className="flex space-x-1 md:space-x-2 w-full justify-stretch">
        {tabs.map((item, index) => (
          <Button inline={inline} onClick={() => onChange(index)} text={item.label} key={item.id} active={index === currentIndex}>
            {item.children}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;