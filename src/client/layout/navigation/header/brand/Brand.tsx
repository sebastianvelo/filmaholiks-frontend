import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";

export interface BrandProps {
    header?: string;
}

const Brand: FunctionComponent<BrandProps> = (props: BrandProps) => {
    const className = Tailwind.builder()
        .add('text-4xl font-extrabold tracking-tighter px-3')
        .add('hover:tracking-widest transition-letter-spacing duration-200 ease-in')
        .build();
    return (
        <header className={className}>
            {props.header}
        </header>
    );
}

export default Brand;