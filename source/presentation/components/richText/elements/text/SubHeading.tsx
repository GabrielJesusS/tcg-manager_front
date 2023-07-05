import { RenderElementProps } from "slate-react";

export const SubHeading = (props: RenderElementProps) => {
  return <h3 {...props}>{props.children}</h3>;
};
