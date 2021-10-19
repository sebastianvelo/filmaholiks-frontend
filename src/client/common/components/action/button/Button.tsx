import { FunctionComponent } from "react";
import { ActionProps } from "../Action";

const Button: FunctionComponent<ActionProps> = (props: ActionProps) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.label ?? props.children}
    </button>
  );
};

export default Button;
