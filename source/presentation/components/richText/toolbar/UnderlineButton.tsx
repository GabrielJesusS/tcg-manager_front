import UnderlineIcon from "@/presentation/public/images/icons/editor/underline.svg"
import { Editor } from "slate";
import { ButtonBase } from "./ButtonBase";
import { useUnderline } from "@/presentation/hooks/richTextEditor/useUnderline";

interface IUnderlineButton {
  editor: Editor;
}

export const UnderlineButton = ({ editor }: IUnderlineButton) => {
  const {checkIsUnderline, toggleUnderline} = useUnderline(editor)
    return (
    <ButtonBase onClick={toggleUnderline} active={checkIsUnderline}>
      <UnderlineIcon className="h-6" />
    </ButtonBase>
  );
};
