import { ColorEnum } from "@/presentation/enums/ColorEnum";
import { useMemo } from "react";
import { Editor, Range, Text, Transforms } from "slate";
import { ReactEditor } from "slate-react";

interface IUseBold {
  toggleBold: () => void;
  checkIsBold: boolean;
}

export function useBold(editor: Editor): IUseBold {
  function toggleBold(): void {
    const { selection } = editor;
    const isActive = checkIsBold;
  
  
    ReactEditor.focus(editor);
    if (!!selection) {
      if (Range.isCollapsed(selection)) {
        Transforms.select(editor, {
          path: selection.anchor.path,
          offset: selection.anchor.offset,
        });
        Editor.addMark(editor, "isBold", isActive ? undefined : true);
        return;
      }

      Transforms.setNodes(
        editor,
        { isBold: isActive ? undefined : true },
        { match: (n) => Text.isText(n), split: true }
      );

      Transforms.select(editor, Editor.end(editor, []));

      return;
    }
    Transforms.insertNodes(editor, [{ text: "", color: ColorEnum.BASE, isBold: true}]);
 

  }

  const checkIsBold = useMemo(()=> {
    const match = Editor.marks(editor);
    return !!match?.isBold;
  }, [Editor.marks(editor)]) 

  return({toggleBold, checkIsBold})
}
