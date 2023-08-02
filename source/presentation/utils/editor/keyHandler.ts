import isHotkey from "is-hotkey";
import { toggleMarks } from "./toggleMarks";
import { toggleEditorElement } from "./toggleEditorElement";
import { Editor, Element } from "slate";
import { ElementTypesEnum } from "@/presentation/enums/ElementTypes";
import { KeyboardEvent } from "react";

export function keyHandler(
  editor: Editor
): (e: KeyboardEvent<HTMLDivElement>) => void {
  return (e: KeyboardEvent<HTMLDivElement>): void => {
    if (isHotkey("mod+b", e)) {
      toggleMarks(editor, "isBold");
    }

    if (isHotkey("mod+i", e)) {
      toggleMarks(editor, "isItalic");
    }

    if (isHotkey("mod+u", e)) {
      toggleMarks(editor, "isUnderline");
    }

    if (isHotkey("mod+q", e)) {
      toggleEditorElement(editor, ElementTypesEnum.QUOTES);
    }

    if (isHotkey("mod+alt+l", e)) {
      toggleEditorElement(editor, ElementTypesEnum.LIST);
    }

    if (isHotkey("mod+shift+l", e)) {
      toggleEditorElement(editor, ElementTypesEnum.NUMBERED_LIST);
    }

    if (e.key === "Backspace") {
      const prev = Editor.previous(editor, {
        at: editor.selection?.focus,
      });

      if (!prev) return;

      const [prevNode] = prev;

      if (Element.isElementType(prevNode, ElementTypesEnum.IMAGE)) {
        e.preventDefault();
      }
    }
  };
}
