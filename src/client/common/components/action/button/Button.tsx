import { FunctionComponent } from "react";
import ActionProps from "../ActionProps";

const Button: FunctionComponent<ActionProps> = (props: ActionProps) => (
    <button className={props.className} onClick={props.onClick} aria-label={props.ariaLabel}>
      {props.label ?? props.children}
    </button>
  );

export default Button;
