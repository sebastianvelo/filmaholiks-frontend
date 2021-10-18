import { FunctionComponent } from "react";

export interface AuthorProps {
    name: string;
    linkedin: string;
}
 
const Author: FunctionComponent<AuthorProps> = (props: AuthorProps) => {
    return (
        <div className={`absolute bottom-0 p-3 font-bold w-full`}>
            Developed with &hearts; by <a href={props.linkedin} target="_blank" rel="noreferrer">{props.name}</a>
        </div>
    );
}
 
export default Author;