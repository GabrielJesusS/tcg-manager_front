import ItalicIcon from "@/presentation/public/images/icons/editor/italic.svg";
import { Editor } from "slate";
import { ButtonBase } from "./ButtonBase";
import { useItalic } from "@/presentation/hooks/richTextEditor/useItalic";

interface IItalicButton {
  editor: Editor;
}

export const ItalicButton = ({ editor }: IItalicButton) => {
  const { checkIsItalic, toggleItalic } = useItalic(editor);
  return (
    <ButtonBase onClick={toggleItalic} active={checkIsItalic}>
      <ItalicIcon className="h-6" />
    </ButtonBase>
  );
};
