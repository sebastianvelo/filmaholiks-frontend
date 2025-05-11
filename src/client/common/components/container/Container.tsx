interface ContainerProps {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
    style?: any;
}

const Container: React.FC<ContainerProps> = (props: ContainerProps) => (
    <div className={`space-y-2 px-4 py-4 ${props.className}`} style={props.style}>
        {props.children}
    </div>
)

export default Container;