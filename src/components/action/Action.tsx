import { FunctionComponent } from "react";
import ComponentColor from "@client/tailwind/constants/ComponentColor";
import Tailwind from "client/tailwind/Tailwind";
import Anchor, { AnchorProps } from "./anchor/Anchor";
import Button, { ButtonProps } from "./button/Button";
import Link, { LinkProps } from "./route/Route";

const EXTERNAL_PATH = "http";

export interface ActionProps extends AnchorProps, LinkProps, ButtonProps {
  color?: ComponentColor;
}

const Action: FunctionComponent<ActionProps> = (props: ActionProps) => {
  const className = Tailwind.builder()
    .add(`px-4 py-2 rounded-md`)
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
