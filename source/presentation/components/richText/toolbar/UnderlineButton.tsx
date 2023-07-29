import UnderlineIcon from "@/presentation/public/images/icons/editor/underline.svg";
import { ButtonBase } from "./ButtonBase";
import { useSlate} from "slate-react";
import { toggleMarks } from "@/presentation/utils/editor/toggleMarks";
import { checkMarkIsActive } from "@/presentation/utils/editor/checkMarkIsActive";


export const UnderlineButton = (): JSX.Element => {
  const editor = useSlate();

  function handleClick(): void {
    toggleMarks(editor, "isUnderline");
  }

  return (
    <ButtonBase
      onClick={handleClick}
      active={checkMarkIsActive(editor, "isUnderline")}
    >
      <UnderlineIcon className="h-6" />
    </ButtonBase>
  );
};
