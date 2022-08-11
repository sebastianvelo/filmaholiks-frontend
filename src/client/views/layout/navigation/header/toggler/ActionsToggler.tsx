import { HamburgerSvg } from "client/common/components/svg/Svg";
import { FunctionComponent } from "react";

export interface ActionsTogglerProps {
    toggleLinks?: () => void;
}

const ActionsToggler: FunctionComponent<ActionsTogglerProps> = (props: ActionsTogglerProps) => (
    <div className={`block sm:hidden p-4 text-secondary dark:text-primary`} onClick={props.toggleLinks}>
        <HamburgerSvg />
    </div>
);

export default ActionsToggler;