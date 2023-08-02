import { ALIGNMENT_TEXT_CLASS_MAP } from "@/presentation/enums/AlignmentEnum";
import classNames from "classnames";
import { RenderElementProps } from "slate-react";

export const HeadingTwo = (props: RenderElementProps) => {
  return (
    <h3
      className={classNames(
        "text-2xl break-all",
        ALIGNMENT_TEXT_CLASS_MAP[props.element.alignment]
      )}
      {...props}
    >
      {props.children}
    </h3>
  );
};
