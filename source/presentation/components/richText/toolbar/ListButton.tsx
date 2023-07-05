import { useCustomEditor } from "@/presentation/hooks/useCustomEditor";
import ListIcon from "@/presentation/public/images/icons/editor/list-bulleted.svg";
import { Editor } from "slate";
import { ButtonBase } from "./ButtonBase";

interface IListButton {
  editor: Editor;
}

export const ListButton = ({ editor }: IListButton) => {
  const { boldUtils } = useCustomEditor(editor);

  return (
    <ButtonBase onClick={boldUtils.toggleBold}>
      <ListIcon className="h-6" />
    </ButtonBase>
  );
};
