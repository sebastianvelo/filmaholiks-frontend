import { FunctionComponent } from "react";
import Tailwind from "client/common/tailwind/Tailwind";

interface InputProps {
    placeholder?: string;
    onChange?: (e: any) => void;
}

const Input: FunctionComponent<InputProps> = (props: InputProps) => {
    const className = Tailwind.builder()
        .add('bg-secondary-dark border-secondary-dark text-white placeholder-opacity-40 placeholder-primary-light px-4 py-2 w-full transition-color duration-500 cursor-pointer border-b-2')
        .add('focus:bg-secondary focus:border-secondary focus:outline-none')
        .add('hover:bg-secondary hover:border-secondary')
        .build()
    return (
        <input placeholder={props.placeholder} onChange={props.onChange} className={className} />
    );
}

export default Input;