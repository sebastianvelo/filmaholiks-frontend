import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";
import ActionProps from "./ActionProps";
import Anchor from "./anchor/Anchor";
import Button from "./button/Button";
import Link from "./route/Route";

const EXTERNAL_PATH = "http";

const Action: FunctionComponent<ActionProps> = (props: ActionProps) => {
  const className = Tailwind.builder()
    .addIf(`px-4 py-2 font-bold transition-all duration-500`, !props.revert)
    .add(props.color)
    .add(props.className)
    .build();

  if (!props.path) return <Button {...props} className={className} />;

  if (props.path.startsWith(EXTERNAL_PATH)) return <Anchor {...props} className={className} />;

  return <Link {...props} className={className} />;
};

export default Action;
