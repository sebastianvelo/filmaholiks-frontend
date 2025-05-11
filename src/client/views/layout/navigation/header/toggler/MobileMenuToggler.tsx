import { IconHamburger } from "@components/svg/Svg";

export interface ActionsTogglerProps {
    toggleMenu?: () => void;
}

const MobileMenuToggler: React.FC<ActionsTogglerProps> = (props: ActionsTogglerProps) => (
    <div className={`block xl:hidden p-4 text-secondary-500 dark:text-primary-500`} onClick={props.toggleMenu}>
        <IconHamburger />
    </div>
);

export default MobileMenuToggler;