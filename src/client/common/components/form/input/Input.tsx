import { FunctionComponent } from "react";
import Tailwind from "client/common/tailwind/Tailwind";

interface InputProps {
    placeholder?: string;
    className?: string;
    value?: string;
    onChange?: (e: any) => void;
    revert?: boolean;
}

const Input: FunctionComponent<InputProps> = (props: InputProps) => {
    const className = Tailwind.builder()
        .add('px-4 py-2 transition-color duration-500 cursor-pointer')
        .addIf('bg-primary placeholder-opacity-50 placeholder-dark', !props.revert)
        .addIf('focus:bg-primary focus:border-primary focus:outline-none', !props.revert)
        .addIf('hover:bg-primary hover:border-primary', !props.revert)
        .addIf('text-black', !props.revert)
        .addIf(props.className, !!props.className)
        .build();

    if (props.value)
        return (
            <input value={props.value} placeholder={props.placeholder} onChange={props.onChange} className={className} spellCheck="false" />
        );
    return (
        <input placeholder={props.placeholder} onChange={props.onChange} className={className} spellCheck="false" />
    );
}

export default Input;