import Brand, { BrandProps } from "./brand/Brand";
import ActionsToggler, { ActionsTogglerProps } from "./toggler/ActionsToggler";

export interface NavigationHeaderProps extends ActionsTogglerProps, BrandProps {
  header?: string;
}

const NavigationHeader: React.FC<NavigationHeaderProps> = (props: NavigationHeaderProps) => (
    <div className={`flex justify-between items-center w-full sm:pt-2 sm:pb-0 xl:pb-2 md:px-8`}>
      <ActionsToggler {...props} />
      <Brand {...props} />
    </div>
  );

export default NavigationHeader;
