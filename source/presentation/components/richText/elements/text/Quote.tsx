import { ALIGNMENT_TEXT_CLASS_MAP } from "@/presentation/enums/AlignmentEnum";
import classNames from "classnames";
import { RenderElementProps } from "slate-react";

export const Quote = (props: RenderElementProps) => {
  return (
    <blockquote
      className={classNames(
        "text-sm border-l-2 pl-2 border-system-200 break-all",
        ALIGNMENT_TEXT_CLASS_MAP[props.element.alignment]
      )}
      {...props.attributes}
    >
      <span>{props.children}</span>
    </blockquote>
  );
};
