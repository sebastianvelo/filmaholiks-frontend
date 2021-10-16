import { FunctionComponent } from "react";
import ComponentClass from "style/ComponentClass";

interface InputProps {
    placeholder: string;
    onChange?: (e: any) => void;
}
 
const Input: FunctionComponent<InputProps> = (props: InputProps) => {
    return ( 
        <input placeholder={props.placeholder} onChange={props.onChange} className={ComponentClass.INPUT()} />
     );
}
 
export default Input;