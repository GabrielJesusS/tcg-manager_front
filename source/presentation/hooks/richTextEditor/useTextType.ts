import { ELEMENT_TYPES_ENUM } from "@/presentation/enums/ElementTypes";
import { useMemo } from "react";
import { Editor, Element, Transforms } from "slate";

interface IUseTextType {
  toggleText: (type: ELEMENT_TYPES_ENUM) => void;
  checkWhatText: ELEMENT_TYPES_ENUM;
}

export function useTextType(editor: Editor): IUseTextType {
  function toggleText(type: ELEMENT_TYPES_ENUM): void {
    Transforms.setNodes(
      editor,
      { type },
      { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) }
    );
  }

  const checkWhatText = useMemo((): ELEMENT_TYPES_ENUM => {
    if (!editor.selection?.focus.path) return ELEMENT_TYPES_ENUM.PARAGRAPH;
    const [parentNode] = Editor.parent(editor, editor.selection?.focus.path);
    return Element.isElement(parentNode)
      ? parentNode.type
      : ELEMENT_TYPES_ENUM.PARAGRAPH;
  }, [editor.selection]);

  return { toggleText, checkWhatText };
}
