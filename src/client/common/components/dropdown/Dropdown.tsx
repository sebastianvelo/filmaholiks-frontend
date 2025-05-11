interface DropdownProps {
    trigger: React.ReactNode | React.ReactNode[];
    children: React.ReactNode | React.ReactNode[];
}

const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => (
        <details className={'list-none'}>
            <summary className={'list-none w-full cursor-pointer'}>
                <div className={'pointer-events-none'}>
                    {props.trigger}
                </div>
            </summary>
            {props.children}
        </details>
    )

export default Dropdown;