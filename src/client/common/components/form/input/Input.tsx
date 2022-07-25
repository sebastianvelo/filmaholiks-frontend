import { FunctionComponent } from "react";
import Tailwind from "client/common/tailwind/Tailwind";

interface InputProps {
    placeholder?: string;
    className?: string;
    onChange?: (e: any) => void;
}

const Input: FunctionComponent<InputProps> = (props: InputProps) => {
    const className = Tailwind.builder()
        .add('bg-secondary placeholder-opacity-50 placeholder-light px-4 py-2 w-full transition-color duration-500 cursor-pointer')
        .add('focus:bg-secondary-light focus:border-secondary-light focus:outline-none')
        .add('hover:bg-secondary-light hover:border-secondary-light')
        .addIf(props.className, !!props.className)
        .build();

    return (
        <input placeholder={props.placeholder} onChange={props.onChange} className={className} spellCheck="false" />
    );
}

export default Input;