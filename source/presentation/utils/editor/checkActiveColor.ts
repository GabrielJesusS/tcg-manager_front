import { Editor } from "slate";
import { ColorEnum } from "../../enums/ColorEnum";

export function checkActiveColor(editor: Editor): ColorEnum {
  const marks = Editor.marks(editor);
  return marks ? marks.color : ColorEnum.BASE;
}
