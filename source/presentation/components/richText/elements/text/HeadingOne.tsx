import { ALIGNMENT_TEXT_CLASS_MAP } from "@/presentation/enums/AlignmentEnum";
import classNames from "classnames";
import { RenderElementProps } from "slate-react";

export const HeadingOne = (props: RenderElementProps) => {
  return (
    <h1
      className={classNames(
        "text-3xl break-all",
        ALIGNMENT_TEXT_CLASS_MAP[props.element.alignment]
      )}
      {...props}
    >
      {props.children}
    </h1>
  );
};
