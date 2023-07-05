import { useCustomEditor } from "@/presentation/hooks/useCustomEditor";
import DividerIcon from "@/presentation/public/images/icons/editor/divider.svg";
import { Editor } from "slate";
import { ButtonBase } from "./ButtonBase";

interface IDividerButton {
  editor: Editor;
}

export const DividerButton = ({ editor }: IDividerButton) => {
  const { boldUtils } = useCustomEditor(editor);

  return (
    <ButtonBase onClick={boldUtils.toggleBold}>
      <DividerIcon className="h-6" />
    </ButtonBase>
  );
};
