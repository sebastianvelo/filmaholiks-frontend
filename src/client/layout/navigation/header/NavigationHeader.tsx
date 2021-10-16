import { FunctionComponent } from "react";
import ComponentStyle from "style/ComponentStyle";

export interface NavigationHeaderProps {
  header?: string;
}

const NavigationHeader: FunctionComponent<NavigationHeaderProps> = (
  props: NavigationHeaderProps
) => {
  return <header className={ComponentStyle.NAVIGATION_HEADER}>{props.header}</header>;
};

export default NavigationHeader;
