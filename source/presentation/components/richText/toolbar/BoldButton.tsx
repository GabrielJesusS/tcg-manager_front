
import BoldIcon from "@/presentation/public/images/icons/editor/bold.svg";
import { Editor } from "slate";
import { ButtonBase } from "./ButtonBase";
import { useBold } from "@/presentation/hooks/richTextEditor /useBold";

interface IBoldButton {
  editor: Editor;
}

export const BoldButton = ({ editor }: IBoldButton) => {
  const {checkIsBold, toggleBold } = useBold(editor)
  return (
    <ButtonBase onClick={toggleBold} active={checkIsBold()}>
      <BoldIcon className="h-6" />
    </ButtonBase>
  );
};
