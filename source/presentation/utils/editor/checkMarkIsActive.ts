import { Editor } from "slate";
import { CustomText } from "../../@types/slate";

export function checkMarkIsActive(
  editor: Editor,
  mark: keyof Omit<CustomText, "color">
): boolean {
  const marks = Editor.marks(editor);
  return marks ? marks[mark] : false;
}
