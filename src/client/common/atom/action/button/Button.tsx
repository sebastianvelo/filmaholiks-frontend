import ActionProps from "../ActionProps";

const Button: React.FC<ActionProps> = (props: ActionProps) => (
  <button disabled={props.disabled} className={props.className} onClick={props.onClick} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} aria-label={props.ariaLabel}>
    {props.label ?? props.children}
  </button>
);

export default Button;
