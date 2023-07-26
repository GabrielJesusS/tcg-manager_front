import { ELEMENT_TYPES_ENUM } from "@/presentation/enums/ElementTypes";
import { Editor, Element } from "slate";

export function checkElementIsActive(
  editor: Editor,
  block: ELEMENT_TYPES_ENUM
): boolean {
  const { selection } = editor;

  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) && Element.isElement(n) && n.type === block,
    })
  );

  return !!match;
}
