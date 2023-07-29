import ItalicIcon from "@/presentation/public/images/icons/editor/italic.svg";
import { ButtonBase } from "./ButtonBase";
import { useSlate } from "slate-react";
import { toggleMarks } from "@/presentation/utils/editor/toggleMarks";
import { checkMarkIsActive } from "@/presentation/utils/editor/checkMarkIsActive";

export const ItalicButton = (): JSX.Element => {
  const editor = useSlate();

  function handleClick(): void {
    toggleMarks(editor, "isItalic");
  }

  return (
    <ButtonBase
      onClick={handleClick}
      active={checkMarkIsActive(editor, "isItalic")}
    >
      <ItalicIcon className="h-6" />
    </ButtonBase>
  );
};
