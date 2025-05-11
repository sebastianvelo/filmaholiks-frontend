import Brand, { BrandProps } from "./brand/Brand";
import MobileMenuToggler, { ActionsTogglerProps } from "./toggler/MobileMenuToggler";

export interface NavigationHeaderProps extends ActionsTogglerProps, BrandProps { }

const NavigationHeader: React.FC<NavigationHeaderProps> = (props: NavigationHeaderProps) => (
  <div className={`flex justify-between items-center w-full sm:pt-2 sm:pb-0 xl:pb-2 md:px-8`}>
    <MobileMenuToggler {...props} />
    <Brand {...props} />
  </div>
);

export default NavigationHeader;
