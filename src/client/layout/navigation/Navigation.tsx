import { FunctionComponent } from "react";
import NavigationActions, {
  NavigationActionsProps
} from "./actions/NavigationActions";
import NavigationHeader, {
  NavigationHeaderProps
} from "./header/NavigationHeader";

export interface NavigationProps
  extends NavigationHeaderProps,
  NavigationActionsProps { }

const Navigation: FunctionComponent<NavigationProps> = (props: NavigationProps) => {
  return (
    <nav className={'flex bg-primary justify-between items-center w-screen py-2 px-4'}>
      <NavigationHeader {...props} />
      <NavigationActions {...props} />
    </nav>
  );
};

export default Navigation;
