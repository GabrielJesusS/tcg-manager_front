import { useCustomEditor } from "@/presentation/hooks/useCustomEditor";
import ItalicIcon from "@/presentation/public/images/icons/editor/italic.svg";
import { Editor } from "slate";
import { ButtonBase } from "./ButtonBase";

interface IItalicButton {
  editor: Editor;
}

export const ItalicButton= ({ editor }: IItalicButton) => {
  const { boldUtils } = useCustomEditor(editor);

  return (
    <ButtonBase onClick={boldUtils.toggleBold}>
      <ItalicIcon className="h-6" />
    </ButtonBase>
  );
};
