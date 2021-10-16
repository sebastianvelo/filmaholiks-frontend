import { FunctionComponent } from "react";

export interface AnchorProps {
  path?: string;
  label?: string;
  className?: string;
}

const Anchor: FunctionComponent<AnchorProps> = (props: AnchorProps) => {
  return (
    <a href={props.path} className={props.className}>
      {props.label}
    </a>
  );
};

export default Anchor;
