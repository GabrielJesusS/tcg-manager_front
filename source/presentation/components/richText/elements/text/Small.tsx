import { ALIGNMENT_TEXT_CLASS_MAP } from "@/presentation/enums/AlignmentEnum";
import classNames from "classnames";
import { RenderElementProps } from "slate-react";

export const Small = (props: RenderElementProps): JSX.Element => {
  return (
    <small
      {...props}
      className={classNames(
        "break-all",
        ALIGNMENT_TEXT_CLASS_MAP[props.element.alignment]
      )}
    >
      {props.children}
    </small>
  );
};
