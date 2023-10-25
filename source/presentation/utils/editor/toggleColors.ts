import { Editor } from "slate";
import { ReactEditor } from "slate-react";
import { ColorEnum } from "../../enums/ColorEnum";

export function toggleColors(editor: Editor, color: ColorEnum): void {
  ReactEditor.focus(editor);
  Editor.addMark(editor, "color", color);
}
