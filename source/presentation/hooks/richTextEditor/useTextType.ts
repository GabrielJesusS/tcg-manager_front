import { CustomElement } from "@/presentation/@types/slate";
import { ELEMENT_TYPES_ENUM } from "@/presentation/enums/ElementTypes";
import { useMemo } from "react";
import { Range } from "slate";
import { Editor, Element, Transforms } from "slate";
import { ReactEditor } from "slate-react";

interface IUseTextType {
  toggleText: (type: ELEMENT_TYPES_ENUM) => void;
  checkWhatText: ELEMENT_TYPES_ENUM;
}

export function useTextType(editor: Editor): IUseTextType {
  function toggleText(type: ELEMENT_TYPES_ENUM): void {
    const { selection } = { ...editor };

    ReactEditor.focus(editor);

    if (!!selection) {
      if (Range.isCollapsed({ ...selection })) {
        Transforms.setNodes(editor, { type } as Partial<CustomElement>, {
          match: (n) => Element.isElement(n) && Editor.isBlock(editor, n),
        });
        return;
      }
      Transforms.setNodes(editor, { type } as Partial<CustomElement>, {
        match: (n) => Element.isElement(n) && Editor.isBlock(editor, n),
        split: true,
      });

      Transforms.select(editor, Editor.end(editor, []));

      Transforms.move(editor, {distance: 1, unit: "offset"})
    }
  }

  const checkWhatText = useMemo((): ELEMENT_TYPES_ENUM => {
    if (!editor.selection?.focus.path) return ELEMENT_TYPES_ENUM.PARAGRAPH;
    const [parentNode] = Editor.parent(editor, editor.selection?.focus.path);
    return Element.isElement(parentNode)
      ? parentNode.type
      : ELEMENT_TYPES_ENUM.PARAGRAPH;
  }, [editor.children , editor.selection?.focus.path]);

  return { toggleText, checkWhatText };
}
