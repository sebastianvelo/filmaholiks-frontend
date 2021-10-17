import { FunctionComponent } from "react";
import { Link as ReactLink } from "react-router-dom";

export interface LinkProps {
  path?: string;
  label?: string;
  className?: string;
  exact?: boolean;
}

const Link: FunctionComponent<LinkProps> = (props: LinkProps) => {
  return <ReactLink className={props.className} to={props.path ?? ''}>{props.label}</ReactLink>;
};

export default Link;
