import { FunctionComponent } from "react";
import Brand, { BrandProps } from "./brand/Brand";
import ActionsToggler, { ActionsTogglerProps } from "./toggler/ActionsToggler";

export interface NavigationHeaderProps extends ActionsTogglerProps, BrandProps {
  header?: string;
}

const NavigationHeader: FunctionComponent<NavigationHeaderProps> = (props: NavigationHeaderProps) => (
    <div className={`flex justify-between items-center w-full pt-2 pb-2 lg:pb-0`}>
      <Brand {...props} />
      <ActionsToggler {...props} />
    </div>
  );

export default NavigationHeader;
