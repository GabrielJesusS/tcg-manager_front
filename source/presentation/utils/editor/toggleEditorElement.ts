import {
  ElementTypesEnum,
  LIST_ELEMENTS,
} from "@/presentation/enums/ElementTypes";
import { Editor, Element, Transforms } from "slate";
import { checkElementIsActive } from "./checkElementIsActive";
import { CustomElement } from "@/presentation/@types/slate";
import { AlignmentEnum } from "@/presentation/enums/AlignmentEnum";
import { ReactEditor } from "slate-react";

export function toggleEditorElement(
  editor: Editor,
  block: ElementTypesEnum
): void {
  ReactEditor.focus(editor)

  const isActive = checkElementIsActive(editor, block);

  const isList = LIST_ELEMENTS.includes(block);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      Element.isElement(n) &&
      LIST_ELEMENTS.includes(n.type),
    split: true,
  });

  const newType = isActive
    ? ElementTypesEnum.PARAGRAPH
    : isList
    ? ElementTypesEnum.LIST_ITEM
    : block;

  Transforms.setNodes(editor, { type: newType } as Partial<CustomElement>);

  if (!isActive && isList) {
    const newElement = {
      type: block,
      children: [],
      alignment: AlignmentEnum.LEFT,
    };

    Transforms.wrapNodes(editor, newElement as CustomElement);
  }
}
