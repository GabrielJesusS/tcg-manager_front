import { RenderElementProps } from "slate-react";

export const Quote = (props: RenderElementProps) => {
  return (
    <blockquote className="text-sm border-l-2 pl-2 border-system-200" {...props}>
      <span>
        {props.children}
      </span>
    </blockquote >
  );
};
