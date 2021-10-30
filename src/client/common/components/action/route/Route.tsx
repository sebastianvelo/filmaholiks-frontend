import { FunctionComponent } from "react";
import { Link as ReactLink } from "react-router-dom";
import { ActionProps } from "../Action";

const Link: FunctionComponent<ActionProps> = (props: ActionProps) => <ReactLink className={props.className} to={props.path ?? ''} onClick={props.onClick}>{props.label ?? props.children}</ReactLink>;

export default Link;
