import { FunctionComponent } from "react";
import Tailwind from "client/common/tailwind/Tailwind";

interface InputProps {
    placeholder?: string;
    className?: string;
    onChange?: (e: any) => void;
}

const Input: FunctionComponent<InputProps> = (props: InputProps) => {
    const className = Tailwind.builder()
        .add('bg-primary-dark text-black placeholder-opacity-40 placeholder-black px-4 py-2 w-full transition-color duration-500 cursor-pointer border-t-2 border-black')
        .add('focus:bg-primary focus:border-secondary focus:outline-none')
        .add('hover:bg-primary hover:border-secondary')
        .addIf(props.className, !!props.className)
        .build();

    return (
        <input placeholder={props.placeholder} onChange={props.onChange} className={className} spellCheck="false" />
    );
}

export default Input;