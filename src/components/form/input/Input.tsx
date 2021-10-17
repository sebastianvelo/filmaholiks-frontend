import { FunctionComponent } from "react";
import Tailwind from "@client/tailwind/Tailwind";

interface InputProps {
    placeholder: string;
    onChange?: (e: any) => void;
}

const Input: FunctionComponent<InputProps> = (props: InputProps) => {
    const className = Tailwind.builder()
        .add('bg-primary-light border-primary-light text-dark placeholder-opacity-40 placeholder-dark px-4 py-2 w-full transition-colors duration-500 cursor-pointer border-b-2')
        .add('focus:bg-primary focus:border-primary focus:outline-none')
        .add('hover:bg-primary-dark hover:border-primary-dark')
        .build()
    return (
        <input placeholder={props.placeholder} onChange={props.onChange} className={className} />
    );
}

export default Input;