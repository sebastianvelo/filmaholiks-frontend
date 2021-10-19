import ComponentHovereableColor from "client/common/tailwind/constants/ComponentHovereableColor";
import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent, MouseEventHandler } from "react";
import Anchor from "./anchor/Anchor";
import Button from "./button/Button";
import Link from "./route/Route";

const EXTERNAL_PATH = "http";
export interface ActionProps {
  path?: string;
  label?: string;
  className?: string;
  exact?: boolean;
  color?: ComponentHovereableColor;
  revert?: boolean;
  onClick?: MouseEventHandler<any>;
  children?: React.ReactNode | React.ReactNode[];
}

const Action: FunctionComponent<ActionProps> = (props: ActionProps) => {
  const className = Tailwind.builder()
    .addIf(`px-4 py-2 rounded-md font-bold`, !props.revert)
    .add(props.color)
    .add(props.className)
    .build();
  return (
    <>
      {!props.path ? (
        <Button {...props} className={className} />
      ) : props.path.startsWith(EXTERNAL_PATH) ? (
        <Anchor {...props} className={className} />
      ) : (
        <Link {...props} className={className} />
      )}
    </>
  );
};

export default Action;
