import { FunctionComponent } from "react";

interface ContainerProps {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
}
 
const Container: FunctionComponent<ContainerProps> = (props: ContainerProps) => ( 
        <div className={`space-y-2 px-4 py-4 w-full ${props.className}`}>
            {props.children}
        </div>
     )
 
export default Container;