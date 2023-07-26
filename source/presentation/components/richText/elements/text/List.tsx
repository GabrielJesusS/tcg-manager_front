import { ALIGNMENT_TEXT_CLASS_MAP } from "@/presentation/enums/AlignmentEnum";
import classNames from "classnames";
import { RenderElementProps } from "slate-react";

export const List = (props: RenderElementProps) => {
  return (
    <ul
      className={classNames(
        "break-all list-disc ml-4",
        ALIGNMENT_TEXT_CLASS_MAP[props.element.alignment]
      )}
      {...props}
    >
      {props.children}
    </ul>
  );
};
