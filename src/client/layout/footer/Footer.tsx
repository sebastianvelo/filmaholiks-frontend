import { FunctionComponent } from "react";
import Author, { AuthorProps } from "./Author";

export interface FooterProps {
    author: AuthorProps;
}

const Footer: FunctionComponent<FooterProps> = (props: FooterProps) => {
    return (
        <footer className={`relative h-52 w-screen bg-secondary-dark text-primary mx-auto text-right`}>
            <Author {...props.author} />
        </footer>
    );
}

export default Footer;