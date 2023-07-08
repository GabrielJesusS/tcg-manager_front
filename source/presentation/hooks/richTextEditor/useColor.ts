import { ColorEnum } from "@/presentation/enums/ColorEnum";
import { useMemo } from "react";
import { Editor, Text, Transforms, Element, Range } from "slate";
import { ReactEditor } from "slate-react";

interface IUseColor {
  toggleColor: (newColor: ColorEnum) => void;
  checkColor: ColorEnum;
}

export function useColor(editor: Editor): IUseColor {
  function toggleColor(newColor: ColorEnum): void {
    const { selection } = editor;
    ReactEditor.focus(editor);
    if (!!selection) {
      if (Range.isCollapsed(selection)) {
        Transforms.select(editor, {
          path: selection.anchor.path,
          offset: selection.anchor.offset,
        });
        Editor.addMark(editor, "color", newColor);
        return;
      }

      Transforms.setNodes(
        editor,
        { color: newColor },
        { match: (n) => Text.isText(n), split: true }
      );

      Transforms.select(editor, Editor.end(editor, []));

      return;
    }
    Transforms.insertNodes(editor, [{ text: "", color: newColor }]);
  }

  const checkColor = useMemo(() => {
    const match = Editor.marks(editor);
    return match?.color as ColorEnum.PRIMARY;
  }, [Editor.marks(editor)]);

  return { toggleColor, checkColor };
}
