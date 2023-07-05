import { RenderElementProps } from "slate-react";

export const Small = (props: RenderElementProps) => {
  return <small {...props}>{props.children}</small>;
};
