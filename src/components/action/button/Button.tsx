import { FunctionComponent, MouseEventHandler } from "react";

export interface ButtonProps {
  label?: string;
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.label ?? props.children}
    </button>
  );
};

export default Button;
