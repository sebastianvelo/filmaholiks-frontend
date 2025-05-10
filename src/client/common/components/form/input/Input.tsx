import { FunctionComponent } from "react";
import Tailwind from "@tailwind-helper/Tailwind";

interface InputProps {
    placeholder?: string;
    className?: string;
    value?: string;
    onChange?: (e: any) => void;
    revert?: boolean;
    type?: string;
    disabled?: boolean;
}

const Input: FunctionComponent<InputProps> = (props: InputProps) => {
    const className = Tailwind.builder()
        .add('px-4 py-4 transition-color duration-500 cursor-pointer w-full')
        .addIf('bg-secondary-dark dark:bg-primary placeholder-opacity-50 dark:placeholder-secondary-dark placeholder-primary-light', !props.revert)
        .addIf('focus:bg-tertiary focus:border-tertiary focus:outline-none', !props.revert)
        .addIf('hover:bg-tertiary hover:border-tertiary', !props.revert)
        .addIf('dark:focus:bg-secondary dark:focus:border-secondary dark:focus:outline-none', !props.revert)
        .addIf('dark:hover:bg-secondary dark:hover:border-secondary', !props.revert)
        .addIf('text-white dark:text-black', !props.revert)
        .addIf(props.className, !!props.className)
        .build();

    if (props.value)
        return (
            <input
                type={props.type ?? "text"}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
                className={className}
                disabled={props.disabled}
                spellCheck="false"
            />
        );
    return (
        <input disabled={props.disabled} type={props.type ?? "text"} placeholder={props.placeholder} onChange={props.onChange} className={className} spellCheck="false" />
    );
}

export default Input;