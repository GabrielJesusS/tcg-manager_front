import ListIcon from "@/presentation/public/images/icons/editor/list-bulleted.svg";
import { Editor } from "slate";
import { ButtonBase } from "./ButtonBase";

interface IListButton {
  editor: Editor;
}

export const ListButton = ({ editor }: IListButton) => {

  return (
    <ButtonBase>
      <ListIcon className="h-6" />
    </ButtonBase>
  );
};
