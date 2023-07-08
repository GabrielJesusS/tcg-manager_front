import { useCallback, useMemo } from "react";
import { Editor, Text, Transforms } from "slate";

interface IUseUnderline {
  toggleUnderline: () => void;
  checkIsUnderline: boolean;
}

export function useUnderline(editor: Editor): IUseUnderline {
  function toggleUnderline(): void {
    const isActive = checkIsUnderline;
    Transforms.setNodes(
      editor,
      { isUnderline: isActive ? undefined : true },
      { match: (n) => Text.isText(n), split: true }
    );
  }

  const checkIsUnderline = useMemo(() => {
    const match = Editor.marks(editor);
    return !!match?.isUnderline;
  }, [Editor.marks(editor)]);

  return { toggleUnderline, checkIsUnderline };
}
