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
        .add('px-4 py-4 transition-color duration-500 cursor-pointer')
        .addIf('bg-secondary-dark dark:bg-primary placeholder-opacity-50 dark:placeholder-secondary-dark placeholder-primary-light', !props.revert)
        .addIf('focus:bg-secondary focus:border-secondary focus:outline-none', !props.revert)
        .addIf('hover:bg-secondary hover:border-secondary', !props.revert)
        .addIf('dark:focus:bg-primary dark:focus:border-primary dark:focus:outline-none', !props.revert)
        .addIf('dark:hover:bg-primary dark:hover:border-primary', !props.revert)
        .addIf('text-white dark:text-black', !props.revert)
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