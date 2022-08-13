import { FunctionComponent } from "react";
import Brand, { BrandProps } from "./brand/Brand";
import ActionsToggler, { ActionsTogglerProps } from "./toggler/ActionsToggler";

export interface NavigationHeaderProps extends ActionsTogglerProps, BrandProps {
  header?: string;
}

const NavigationHeader: FunctionComponent<NavigationHeaderProps> = (props: NavigationHeaderProps) => (
    <div className={`flex justify-between items-center w-full sm:pt-2 sm:pb-2 lg:pb-0`}>
      <ActionsToggler {...props} />
      <Brand {...props} />
    </div>
  );

export default NavigationHeader;
