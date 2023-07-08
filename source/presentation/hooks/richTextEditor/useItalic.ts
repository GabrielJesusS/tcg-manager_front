import { ColorEnum } from "@/presentation/enums/ColorEnum";
import { useMemo } from "react";
import { Editor, Range, Text, Transforms } from "slate";
import { ReactEditor } from "slate-react";

interface IUseItalic {
  toggleItalic: () => void;
  checkIsItalic: boolean;
}

export function useItalic(editor: Editor): IUseItalic {
  function toggleItalic(): void {
    const { selection } = editor;
    const isActive = checkIsItalic;

    ReactEditor.focus(editor);
    if (!!selection) {
      if (Range.isCollapsed(selection)) {
        Transforms.select(editor, {
          path: selection.anchor.path,
          offset: selection.anchor.offset,
        });
        Editor.addMark(editor, "isItalic", isActive ? undefined : true);
        return;
      }

      Transforms.setNodes(
        editor,
        { isItalic: isActive ? undefined : true },
        { match: (n) => Text.isText(n), split: true }
      );

      Transforms.select(editor, Editor.end(editor, []));
      return;
    }
    Transforms.insertNodes(editor, [
      { text: "", color: ColorEnum.BASE, isItalic: true },
    ]);
  }

  const checkIsItalic = useMemo(() => {
    const match = Editor.marks(editor);
    return !!match?.isItalic;
  }, [Editor.marks(editor)]);

  return { toggleItalic, checkIsItalic };
}
