import { RenderElementProps } from "slate-react";

export const Paragraph = (props: RenderElementProps) => {
  return <p className=" w-full break-all" {...props.attributes}>{props.children}</p>;
};
