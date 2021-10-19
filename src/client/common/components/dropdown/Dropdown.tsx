import { FunctionComponent } from "react";

interface DropdownProps {
    trigger: React.ReactNode | React.ReactNode[];
    children: React.ReactNode | React.ReactNode[];
}

const Dropdown: FunctionComponent<DropdownProps> = (props: DropdownProps) => {
    return (
        <details className={'list-none'}>
            <summary className={'list-none w-full cursor-pointer'}>
                <div className={'pointer-events-none'}>
                    {props.trigger}
                </div>
            </summary>
            {props.children}
        </details>
    );
}

export default Dropdown;