import { FunctionComponent } from "react";
import Tailwind from "client/common/tailwind/Tailwind";

interface InputProps {
    placeholder: string;
    onChange?: (e: any) => void;
}

const Input: FunctionComponent<InputProps> = (props: InputProps) => {
    const className = Tailwind.builder()
        .add('bg-primary border-primary text-dark placeholder-opacity-40 placeholder-dark px-4 py-2 w-full transition-colors duration-500 cursor-pointer border-b-2')
        .add('focus:bg-primary-light focus:border-primary-light focus:outline-none')
        .add('hover:bg-primary-light hover:border-primary-light')
        .build()
    return (
        <input placeholder={props.placeholder} onChange={props.onChange} className={className} />
    );
}

export default Input;