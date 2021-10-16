import { FunctionComponent } from "react";
import ComponentStyle from "style/ComponentStyle";
import NavigationActions, {
  NavigationActionsProps,
} from "./actions/NavigationActions";
import NavigationHeader, {
  NavigationHeaderProps,
} from "./header/NavigationHeader";

export interface NavigationProps
  extends NavigationHeaderProps,
  NavigationActionsProps { }

const Navigation: FunctionComponent<NavigationProps> = (
  props: NavigationProps
) => {
  return (
    <nav className={ComponentStyle.NAVIGATION}>
      <NavigationHeader {...props} />
      <NavigationActions {...props} />
    </nav>
  );
};

export default Navigation;
