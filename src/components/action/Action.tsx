import { FunctionComponent } from "react";
import ComponentClass from "style/ComponentClass";
import ComponentColor from "style/tailwind/constants/ComponentColor";
import Anchor, { AnchorProps } from "./anchor/Anchor";
import Button, { ButtonProps } from "./button/Button";
import Link, { LinkProps } from "./route/Route";

const EXTERNAL_PATH = "http";

export interface ActionProps extends AnchorProps, LinkProps, ButtonProps {
  color?: ComponentColor;
}

const Action: FunctionComponent<ActionProps> = (props: ActionProps) => {
  return (
    <>
      {!props.path ? (
        <Button {...props} className={ComponentClass.ACTION(props)} />
      ) : props.path.startsWith(EXTERNAL_PATH) ? (
        <Anchor {...props} className={ComponentClass.ACTION(props)} />
      ) : (
        <Link {...props} className={ComponentClass.ACTION(props)} />
      )}
    </>
  );
};

export default Action;
