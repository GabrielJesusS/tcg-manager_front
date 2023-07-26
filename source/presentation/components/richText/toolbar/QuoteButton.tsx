import QuoteIcon from "@/presentation/public/images/icons/editor/quote-close.svg";
import { ButtonBase } from "./ButtonBase";
import { ELEMENT_TYPES_ENUM } from "@/presentation/enums/ElementTypes";
import { checkElementIsActive } from "@/presentation/utils/editor/checkElementIsActive";
import { toggleEditorElement } from "@/presentation/utils/editor/toggleEditorElement";
import { useSlateStatic } from "slate-react";

export const QuoteButton = (): JSX.Element => {
  const editor = useSlateStatic();

  function handleClick(): void {
    toggleEditorElement(editor, ELEMENT_TYPES_ENUM.QUOTES);
  }

  return (
    <ButtonBase
      onClick={handleClick}
      active={checkElementIsActive(editor, ELEMENT_TYPES_ENUM.QUOTES)}
    >
      <QuoteIcon className="h-6" />
    </ButtonBase>
  );
};
