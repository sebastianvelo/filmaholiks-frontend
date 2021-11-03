import { FunctionComponent } from "react";
import Tailwind from "client/common/tailwind/Tailwind";

interface InputProps {
    placeholder?: string;
    onChange?: (e: any) => void;
}

const Input: FunctionComponent<InputProps> = (props: InputProps) => {
    const className = Tailwind.builder()
        .add('bg-dark border-dark text-white placeholder-opacity-40 placeholder-primary-light px-4 py-2 w-full transition-all duration-500 cursor-pointer border-b-2')
        .add('focus:bg-gray-900 focus:border-gray-900 focus:outline-none md:focus:w-1/4')
        .add('hover:bg-gray-900 hover:border-gray-900')
        .build()
    return (
        <input placeholder={props.placeholder} onChange={props.onChange} className={className} />
    );
}

export default Input;