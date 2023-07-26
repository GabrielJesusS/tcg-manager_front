import ListIcon from "@/presentation/public/images/icons/editor/list-bulleted.svg";
import { Editor, Element, Transforms } from "slate";
import { ButtonBase } from "./ButtonBase";
import { ELEMENT_TYPES_ENUM } from "@/presentation/enums/ElementTypes";
import { AlignmentEnum } from "@/presentation/enums/AlignmentEnum";
import { ListItemElement } from "@/presentation/@types/slate";
import { useSlateStatic } from "slate-react";

export const NumberedListButton = (): JSX.Element => {
  const editor = useSlateStatic();

  function toggleList(): void {
    const { selection } = editor;

    if (selection) {
      const [parentNode] = Editor.parent(editor, selection.focus);

      if (Element.isElement(parentNode)) {
        if (Element.isElementType(parentNode, ELEMENT_TYPES_ENUM.LIST_ITEM)) {
          Transforms.unwrapNodes(editor);
          Transforms.setNodes(editor, { type: ELEMENT_TYPES_ENUM.PARAGRAPH });
          return;
        }

        Transforms.setNodes(editor, {
          type: ELEMENT_TYPES_ENUM.LIST_ITEM,
        } as Partial<ListItemElement>);
        Transforms.wrapNodes(editor, {
          type: ELEMENT_TYPES_ENUM.NUMBERED_LIST,
          children: [],
          alignment: AlignmentEnum.LEFT,
        });
      }
    }
  }

  return (
    <ButtonBase onClick={toggleList}>
      <ListIcon className="h-6" />
    </ButtonBase>
  );
};
