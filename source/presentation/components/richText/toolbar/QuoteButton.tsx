import QuoteIcon from "@/presentation/public/images/icons/editor/quote-close.svg";
import { ButtonBase } from "./ButtonBase";
import { ElementTypesEnum } from "@/presentation/enums/ElementTypes";
import { checkElementIsActive } from "@/presentation/utils/editor/checkElementIsActive";
import { toggleEditorElement } from "@/presentation/utils/editor/toggleEditorElement";
import { useSlate } from "slate-react";

export const QuoteButton = (): JSX.Element => {
  const editor = useSlate();

  function handleClick(): void {
    toggleEditorElement(editor, ElementTypesEnum.QUOTES);
  }

  return (
    <ButtonBase
      onClick={handleClick}
      active={checkElementIsActive(editor, ElementTypesEnum.QUOTES)}
    >
      <QuoteIcon className="h-6" />
    </ButtonBase>
  );
};
