import { ALIGNMENT_TEXT_CLASS_MAP } from "@/presentation/enums/AlignmentEnum";
import classNames from "classnames";
import { RenderElementProps } from "slate-react";

export const Paragraph = (props: RenderElementProps) => {
  return (
    <p
      className={classNames(
        "w-full break-all",
        ALIGNMENT_TEXT_CLASS_MAP[props.element.alignment]
      )}
      {...props.attributes}
    >
      {props.children}
    </p>
  );
};
