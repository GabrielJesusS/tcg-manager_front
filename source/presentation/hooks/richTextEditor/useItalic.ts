import { useCallback, useMemo } from "react";
import { Editor, Text, Transforms } from "slate";

interface IUseItalic {
  toggleItalic: () => void;
  checkIsItalic: boolean;
}

export function useItalic(editor: Editor): IUseItalic {
  function toggleItalic(): void {
    const isActive = checkIsItalic;
    Transforms.setNodes(
      editor,
      { isItalic: isActive ? undefined : true },
      { match: (n) => Text.isText(n), split: true }
    );
  }

  const checkIsItalic = useMemo(() => {
    const match = Editor.marks(editor);
    return !!match?.isItalic;
  }, [Editor.marks(editor)]);

  return { toggleItalic, checkIsItalic };
}
