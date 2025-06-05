import Author, { AuthorProps } from "./Author";
import contacts from "./contacts";
import FooterIcon from "./FooterIcon";

export interface FooterProps {
    author: AuthorProps;
}

const Footer: React.FC<FooterProps> = (props: FooterProps) => (
    <footer className="backdrop-blur-md hidden 2xl:block 2xl:fixed w-full border-t border-secondary-900/20 dark:border-secondary-500/20 bottom-0 bg-white/70 text-black dark:bg-black/70 dark:text-secondary-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <Author {...props.author} />
                <div className="flex space-x-6 items-center">
                    {contacts.map((link) => (<FooterIcon key={link.name} {...link} />))}
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;