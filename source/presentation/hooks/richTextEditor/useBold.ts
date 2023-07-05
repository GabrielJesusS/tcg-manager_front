import { useCallback } from "react";
import { Editor, Text, Transforms } from "slate";

interface IUseBold {
  toggleBold: () => void;
  checkIsBold: () => boolean;
}

export function useBold(editor: Editor): IUseBold {
  function toggleBold(): void {
    const isActive = checkIsBold();
    Transforms.setNodes(
      editor,
      { isBold: isActive ? undefined : true },
      { match: (n) => Text.isText(n), split: true }
    );
  }

  const checkIsBold = useCallback(()=> {
    const match = Editor.marks(editor);
    return !!match?.isBold;
  }, [Editor.marks(editor)]) 

  return({toggleBold, checkIsBold})
}
