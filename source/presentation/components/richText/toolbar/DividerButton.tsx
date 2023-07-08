import DividerIcon from "@/presentation/public/images/icons/editor/divider.svg";
import { Editor } from "slate";
import { ButtonBase } from "./ButtonBase";

interface IDividerButton {
  editor: Editor;
}

export const DividerButton = ({ editor }: IDividerButton) => {

  return (
    <ButtonBase>
      <DividerIcon className="h-6" />
    </ButtonBase>
  );
};
