import Tailwind from "@tailwind-helper/Tailwind";
import useClickOutside from "client/hooks/useClickOutside";
import { useRef, useState } from "react";
import NavigationActions, { NavigationActionsProps } from "./actions/NavigationActions";
import NavigationHeader, { NavigationHeaderProps } from "./header/NavigationHeader";

export interface NavigationProps extends NavigationHeaderProps, NavigationActionsProps { }

const Navigation: React.FC<NavigationProps> = (props: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside(menuRef, () => setIsMobileMenuOpen(false));

  const className = Tailwind.builder()
    .add("lg:flex lg:flex-col xl:flex-row items-center fixed z-50 w-full h-16")
    .add("bg-primary-100/50 dark:bg-primary-950/40 backdrop-blur-2xl")
    .build();

  return (
    <nav className={className}>
      <div className="lg:w-2/3 lg:mx-auto flex items-center w-full" ref={menuRef}>
        <NavigationHeader {...props} toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        <NavigationActions {...props} isOpen={isMobileMenuOpen} />
      </div>
    </nav>
  );
};

export default Navigation;
