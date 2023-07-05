import { ELEMENT_TYPES_ENUM } from "@/presentation/enums/ElementTypes";
import { Editor, Element, Transforms } from "slate";

interface IUseTextType {
  toggleText: (type: ELEMENT_TYPES_ENUM) => void;
  checkWhatText: () => string;
}

export function useTextType(editor: Editor): IUseTextType {
  function toggleText(type: ELEMENT_TYPES_ENUM): void {
    Transforms.setNodes(
      editor,
      { type },
      { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) }
    );
  }
  function checkWhatText(): string {
    const [matchs] = Editor.nodes<Element>(editor, {
      match: (n) => Element.isElement(n) && Editor.isBlock(editor, n),
    });

    if (!matchs) {
      return ELEMENT_TYPES_ENUM.PARAGRAPH;
    }

    return matchs[0].type;
  }

  return { toggleText, checkWhatText };
}
