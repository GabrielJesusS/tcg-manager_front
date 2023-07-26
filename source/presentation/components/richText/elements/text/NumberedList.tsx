import { ALIGNMENT_TEXT_CLASS_MAP } from "@/presentation/enums/AlignmentEnum";
import classNames from "classnames";
import { RenderElementProps } from "slate-react";

export const NumberedList = (props: RenderElementProps) => {
  return (
    <ol
      className={classNames(
        "list-decimal ml-4 break-all",
        ALIGNMENT_TEXT_CLASS_MAP[props.element.alignment]
      )}
      {...props}
    >
      {props.children}
    </ol>
  );
};
