import { FunctionComponent } from "react";
import Brand, { BrandProps } from "./brand/Brand";
import Menu, { MenuProps } from "./menu/Menu";
import ActionsToggler, { ActionsTogglerProps } from "./toggler/ActionsToggler";

export interface NavigationHeaderProps extends ActionsTogglerProps, BrandProps {
  header?: string;
  menu: MenuProps;
}

const NavigationHeader: FunctionComponent<NavigationHeaderProps> = (props: NavigationHeaderProps) => {
  return (
    <div className={`flex justify-between items-center w-full pt-2 pb-2 lg:pb-0`}>
      <ActionsToggler {...props} />
      <Brand {...props} />
      <Menu {...props.menu} />
    </div>
  );
};

export default NavigationHeader;
