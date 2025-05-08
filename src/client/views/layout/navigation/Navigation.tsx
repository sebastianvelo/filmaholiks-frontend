import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent, useState } from "react";
import NavigationActions, { NavigationActionsProps } from "./actions/NavigationActions";
import NavigationHeader, { NavigationHeaderProps } from "./header/NavigationHeader";

export interface NavigationProps extends NavigationHeaderProps, NavigationActionsProps { }

const Navigation: FunctionComponent<NavigationProps> = (props: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const className = Tailwind.builder()
  .add("sm:flex sm:flex-col xl:flex-row items-center fixed z-50 w-full h-16")
  .add("bg-white/50 dark:bg-black/70 backdrop-blur-md")
  .build();

  return (
    <nav className={className}>
      <NavigationHeader {...props} toggleLinks={() => setIsOpen(!isOpen)} />
      <NavigationActions {...props} isOpen={isOpen} toggleLinks={() => setIsOpen(!isOpen)} />
    </nav>
  );
};

export default Navigation;
