import { RenderElementProps } from "slate-react";

export const ImageElm = (props: RenderElementProps) => {
  return (
    <div
      {...props.attributes}
      contentEditable={false}
      className="py-2 bg-red-300"
    >
      <hr className=" border-hidden h-1 bg-system-200" />
      <span className="hidden">{props.children}</span>
    </div>
  );
};
