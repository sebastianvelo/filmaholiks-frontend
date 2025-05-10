import Tailwind from "@tailwind-helper/Tailwind";
import { FunctionComponent } from "react";

export interface BrandProps {
    header?: string;
}

const Brand: FunctionComponent<BrandProps> = (props: BrandProps) => {
    const className = Tailwind.builder()
        .add("brand")
        .add('text-3xl md:text-4xl px-4 py-2 rounded-lg')
        .add('hover:tracking-widest transition-letter-spacing duration-200 ease-in')
        .add(`bg-clip-text text-transparent bg-gradient-to-l from-secondary-950 via-secondary-500 to-secondary-950 dark:from-primary-100 dark:via-primary-600 dark:to-primary-100 font-bold`)
        .build();
        
    return (
        <header className={className}>
            {props.header}
        </header>
    );
}

export default Brand;