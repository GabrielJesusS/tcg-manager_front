import BoldIcon from "@/presentation/public/images/icons/editor/bold.svg";
import { ButtonBase } from "./ButtonBase";
import { useSlateStatic } from "slate-react";
import { toggleMarks } from "@/presentation/utils/editor/toggleMarks";
import { checkMarkIsActive } from "@/presentation/utils/editor/checkMarkIsActive";

export const BoldButton = (): JSX.Element => {
  const editor = useSlateStatic();

  function handleClick(): void {
    toggleMarks(editor, "isBold");
  }

  return (
    <ButtonBase
      onClick={handleClick}
      active={checkMarkIsActive(editor, "isBold")}
    >
      <BoldIcon className="h-6" />
    </ButtonBase>
  );
};
