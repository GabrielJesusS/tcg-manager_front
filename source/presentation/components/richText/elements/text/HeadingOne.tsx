import { RenderElementProps } from "slate-react";

export const HeadingOne = (props: RenderElementProps) => {
  return <h1 className="text-3xl" {...props}>{props.children}</h1>;
};
