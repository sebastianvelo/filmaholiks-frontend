import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";

export interface BrandProps {
    header?: string;
}

const Brand: FunctionComponent<BrandProps> = (props: BrandProps) => {
    const className = Tailwind.builder()
        .add("brand")
        .add('text-4xl md:text-5xl pl-1 pr-4 mx-2 rounded-lg')
        .add('hover:tracking-widest transition-letter-spacing duration-200 ease-in')
        .add(`bg-clip-text text-transparent bg-gradient-to-l from-secondary-dark to-secondary dark:from-primary-light dark:to-primary-dark font-bold`)
        .build();
    return (
        <header className={className}>
            {props.header}
        </header>
    );
}

export default Brand;