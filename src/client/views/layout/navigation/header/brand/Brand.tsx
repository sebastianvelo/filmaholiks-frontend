import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";

export interface BrandProps {
    header?: string;
}

const Brand: FunctionComponent<BrandProps> = (props: BrandProps) => {
    const className = Tailwind.builder()
        .add('text-xl sm:text-4xl font-extrabold tracking-tighter px-2 mx-2 rounded-xl border-t-4 border-l-4 border-secondary-light')
        .add('hover:tracking-widest transition-letter-spacing duration-200 ease-in')
        .add(`bg-clip-text text-transparent bg-gradient-to-bl from-secondary-light to-secondary-dark`)
        .build();
    return (
        <header className={className}>
            {props.header}
        </header>
    );
}

export default Brand;