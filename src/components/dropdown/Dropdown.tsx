import { FunctionComponent } from "react";
import ComponentStyle from "style/ComponentStyle";

interface DropdownProps {
    trigger: React.ReactNode | React.ReactNode[];
    content: React.ReactNode | React.ReactNode[];
}

const Dropdown: FunctionComponent<DropdownProps> = (props: DropdownProps) => {
    return (
        <details className={ComponentStyle.DROPDOWN}>
            <summary className={ComponentStyle.DROPDOWN_TRIGGER}>
                <div className={ComponentStyle.DROPDOWN_TRIGGER_WRAPPER}>
                    {props.trigger}
                </div>
            </summary>
            {props.content}
        </details>
    );
}

export default Dropdown;