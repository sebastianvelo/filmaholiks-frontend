export interface AuthorProps {
    name: string;
    portfolio: string;
}

const Author: React.FC<AuthorProps> = (props: AuthorProps) => (
    <p className="text-secondary-800 dark:text-primary-300 font-bold mb-4 md:mb-0 text-sm">
        <a href={props.portfolio} target="_blank" rel="noreferrer">Made with 🧉, ☕️, and ❤️</a>
    </p>
)

export default Author;