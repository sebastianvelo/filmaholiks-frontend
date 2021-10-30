import { FunctionComponent } from "react";
import { ActionProps } from "../Action";

const Anchor: FunctionComponent<ActionProps> = (props: ActionProps) => (
    <a href={props.path} className={props.className} onClick={props.onClick}>
      {props.label ?? props.children}
    </a>
  );

export default Anchor;
