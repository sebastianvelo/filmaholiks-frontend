import { FunctionComponent } from "react";

export interface NavigationHeaderProps {
  header?: string;
}

const NavigationHeader: FunctionComponent<NavigationHeaderProps> = (props: NavigationHeaderProps) => {
  return <header className={'text-2xl'}>{props.header}</header>;
};

export default NavigationHeader;
