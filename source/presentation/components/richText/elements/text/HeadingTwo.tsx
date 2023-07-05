import { RenderElementProps } from "slate-react";

export const HeadingTwo = (props: RenderElementProps) => {
  return <h2 className="text-2xl" {...props}>{props.children}</h2>;
};
