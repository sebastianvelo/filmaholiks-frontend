import { FunctionComponent } from "react";

export interface AuthorProps {
    name: string;
    linkedin: string;
}
 
const Author: FunctionComponent<AuthorProps> = (props: AuthorProps) => (
        <div className={`hidden sm:flex absolute bottom-0 p-3 font-black w-full z-50`}>
            Developed with ❤️ by&nbsp;&nbsp;<a href={props.linkedin} target="_blank" rel="noreferrer">{props.name}</a>
        </div>
    )
 
export default Author;