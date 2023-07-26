import { COLOR_TEXT_MAP } from "@/presentation/enums/ColorEnum";
import classNames from "classnames";
import { useCallback } from "react";
import { RenderLeafProps } from "slate-react";

export function useRenderLeafs() {
  const renderLeafs = useCallback((props: RenderLeafProps) => {
    return (
      <span
        className={classNames({
          "font-bold": props.leaf.isBold,
          "italic": props.leaf.isItalic,
          "underline underline-offset-2": props.leaf.isUnderline,
        },  {[COLOR_TEXT_MAP[props.leaf.color]] : !props.leaf.isLink})}
        {...props.attributes}
      >
        {props.children}
      </span>
    );
  }, []);
  return { renderLeafs};
}
