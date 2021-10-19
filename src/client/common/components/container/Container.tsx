import { FunctionComponent } from "react";

interface ContainerProps {
    children: React.ReactNode | React.ReactNode[];
}
 
const Container: FunctionComponent<ContainerProps> = (props: ContainerProps) => {
    return ( 
        <div className={`space-y-2 px-4 py-4`}>
            {props.children}
        </div>
     );
}
 
export default Container;