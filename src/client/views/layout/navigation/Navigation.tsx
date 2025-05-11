import Tailwind from "@tailwind-helper/Tailwind";
import { useState } from "react";
import NavigationActions, { NavigationActionsProps } from "./actions/NavigationActions";
import NavigationHeader, { NavigationHeaderProps } from "./header/NavigationHeader";

export interface NavigationProps extends NavigationHeaderProps, NavigationActionsProps { }

const Navigation: React.FC<NavigationProps> = (props: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const className = Tailwind.builder()
  .add("lg:flex lg:flex-col xl:flex-row items-center fixed z-50 w-full h-16")
  .add("bg-white/90 dark:bg-black/90 backdrop-blur-md")
  .build();

  return (
    <nav className={className}>
      <NavigationHeader {...props} toggleLinks={() => setIsOpen(!isOpen)} />
      <NavigationActions {...props} isOpen={isOpen} toggleLinks={() => setIsOpen(!isOpen)} />
    </nav>
  );
};

export default Navigation;
