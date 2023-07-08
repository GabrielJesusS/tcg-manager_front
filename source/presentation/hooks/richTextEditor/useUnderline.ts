import { ColorEnum } from "@/presentation/enums/ColorEnum";
import { useCallback, useMemo } from "react";
import { Editor, Range, Text, Transforms } from "slate";
import { ReactEditor } from "slate-react";

interface IUseUnderline {
  toggleUnderline: () => void;
  checkIsUnderline: boolean;
}

export function useUnderline(editor: Editor): IUseUnderline {
  function toggleUnderline(): void {
    const isActive = checkIsUnderline;

    const { selection } = editor;
    ReactEditor.focus(editor);
    if (!!selection) {
      if (Range.isCollapsed(selection)) {
        Transforms.select(editor, {
          path: selection.anchor.path,
          offset: selection.anchor.offset,
        });
        Editor.addMark(editor, "isUnderline", isActive ? undefined : true);
        return;
      }

      Transforms.setNodes(
        editor,
        { isUnderline: isActive ? undefined : true },
        { match: (n) => Text.isText(n), split: true }
      );

      Transforms.select(editor, Editor.end(editor, []));

      return;
    }
    Transforms.insertNodes(editor, [{ text: "", color: ColorEnum.BASE, isUnderline: true}]);
  }

  const checkIsUnderline = useMemo(() => {
    const match = Editor.marks(editor);
    return !!match?.isUnderline;
  }, [Editor.marks(editor)]);

  return { toggleUnderline, checkIsUnderline };
}
