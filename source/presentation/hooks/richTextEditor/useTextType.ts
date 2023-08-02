import { CustomElement } from "@/presentation/@types/slate";
import { ElementTypesEnum } from "@/presentation/enums/ElementTypes";
import { useMemo } from "react";
import { Range } from "slate";
import { Editor, Element, Transforms } from "slate";
import { ReactEditor } from "slate-react";

interface IUseTextType {
  toggleText: (type: ElementTypesEnum) => void;
  checkWhatText: ElementTypesEnum;
}

export function useTextType(editor: Editor): IUseTextType {
  function toggleText(type: ElementTypesEnum): void {
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

  const checkWhatText = useMemo((): ElementTypesEnum => {
    if (!editor.selection?.focus.path) return ElementTypesEnum.PARAGRAPH;
    const [parentNode] = Editor.parent(editor, editor.selection?.focus.path);
    return Element.isElement(parentNode)
      ? parentNode.type
      : ElementTypesEnum.PARAGRAPH;
  }, [editor.children , editor.selection?.focus.path]);

  return { toggleText, checkWhatText };
}
