import { FunctionComponent } from "react";

export interface AuthorProps {
    name: string;
    linkedin: string;
}
 
const Author: FunctionComponent<AuthorProps> = (props: AuthorProps) => (
        <div className={`absolute bottom-0 p-3 font-black w-full`}>
            Developed with ❤️ by <a href={props.linkedin} target="_blank" rel="noreferrer">{props.name}</a>
        </div>
    )
 
export default Author;