import { HamburgerSvg } from "client/common/components/svg/Svg";
import { FunctionComponent } from "react";

export interface ActionsTogglerProps {
    toggleLinks?: () => void;
}

const ActionsToggler: FunctionComponent<ActionsTogglerProps> = (props: ActionsTogglerProps) => {
    return (
        <div className={`block sm:hidden`} onClick={props.toggleLinks!}>
            <HamburgerSvg />
        </div>
    );
}

export default ActionsToggler;