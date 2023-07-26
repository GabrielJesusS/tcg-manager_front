import { ALIGNMENT_TEXT_CLASS_MAP } from "@/presentation/enums/AlignmentEnum";
import classNames from "classnames";
import { RenderElementProps } from "slate-react";

export const ListItem = (props: RenderElementProps) => {
  return <li {...props.attributes}>{props.children}</li>;
};
