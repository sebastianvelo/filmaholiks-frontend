import ActionProps from "../ActionProps";

const Anchor: React.FC<ActionProps> = (props: ActionProps) => (
    <a href={props.path} className={props.className} onClick={props.onClick}>
      {props.label ?? props.children}
    </a>
  );

export default Anchor;
