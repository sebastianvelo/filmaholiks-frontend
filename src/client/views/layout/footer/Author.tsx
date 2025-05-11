export interface AuthorProps {
    name: string;
    linkedin: string;
}

const Author: React.FC<AuthorProps> = (props: AuthorProps) => (
    <p className="text-secondary-900 dark:text-primary-100 font-bold mb-4 md:mb-0">
        Made with ❤️ and ☕️ by <a href={props.linkedin} target="_blank" rel="noreferrer">{props.name}</a>
    </p>
)

export default Author;