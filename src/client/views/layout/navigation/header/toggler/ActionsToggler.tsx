import { IconHamburger } from "@components/svg/Svg";
import { FunctionComponent } from "react";

export interface ActionsTogglerProps {
    toggleLinks?: () => void;
}

const ActionsToggler: FunctionComponent<ActionsTogglerProps> = (props: ActionsTogglerProps) => (
    <div className={`block xl:hidden p-4 text-secondary-500 dark:text-primary-500`} onClick={props.toggleLinks}>
        <IconHamburger />
    </div>
);

export default ActionsToggler;