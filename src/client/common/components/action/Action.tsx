import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";
import ActionProps from "./ActionProps";
import Anchor from "./anchor/Anchor";
import Button from "./button/Button";
import Link from "./route/Route";

const EXTERNAL_PATH = "http";

const Action: FunctionComponent<ActionProps> = (props: ActionProps) => {
  const className = Tailwind.builder()
    .addIf(`px-4 py-2 rounded-sm font-bold`, !props.revert)
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
