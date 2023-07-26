import { Editor } from "slate";
import { CustomText } from "../../@types/slate";
import { checkMarkIsActive } from "./checkMarkIsActive";
import { ReactEditor } from "slate-react";

export function toggleMarks(editor: Editor, mark: keyof Omit<CustomText, "color">): void {
  const isActive = checkMarkIsActive(editor, mark);

  ReactEditor.focus(editor)
  if (isActive) {
    Editor.removeMark(editor, mark);
    return;
  }

  Editor.addMark(editor, mark, true);
}
