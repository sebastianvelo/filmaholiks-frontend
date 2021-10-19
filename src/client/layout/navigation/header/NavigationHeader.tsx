import { HamburgerSvg } from "client/common/components/svg/Svg";
import { FunctionComponent } from "react";
import Menu, { MenuProps } from "./menu/Menu";

export interface NavigationHeaderProps {
  header?: string;
  toggleLinks?: () => void;
  menu: MenuProps;
}

const NavigationHeader: FunctionComponent<NavigationHeaderProps> = (props: NavigationHeaderProps) => {
  return (
    <div className={`flex justify-between items-center w-full px-3 pt-2 pb-2 lg:pb-0`}>
      <div className={`block sm:hidden`} onClick={props.toggleLinks!}>
        <HamburgerSvg />
      </div>
      <header className={'text-2xl'}>{props.header}</header>
      <Menu {...props.menu} />
    </div>
  );
};

export default NavigationHeader;
