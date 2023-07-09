import ImageIcon from "@/presentation/public/images/icons/editor/image.svg";
import { Editor, Transforms } from "slate";
import { ButtonBase } from "./ButtonBase";
import { ImageElement, ParagraphElement } from "@/presentation/@types/slate";
import { ELEMENT_TYPES_ENUM } from "@/presentation/enums/ElementTypes";
import { ReactEditor } from "slate-react";
import { ColorEnum } from "@/presentation/enums/ColorEnum";

interface IImageButton {
  editor: Editor;
}

function createDividerElement(): ImageElement {
  return {
    children: [{text: "", color: ColorEnum.BASE}],
    type: ELEMENT_TYPES_ENUM.IMAGE,
  };
}

const createParagraphNode = (
  children = [{ text: "", color: ColorEnum.BASE }]
): ParagraphElement => ({
  type: ELEMENT_TYPES_ENUM.PARAGRAPH,
  children,
});

export const ImageButton = ({ editor }: IImageButton) => {
  function insertDivider(): void {
    const { selection } = editor;
    

  
    if (!!selection) {
      const [parentNode] = Editor.parent(editor, selection.focus.path);
      ReactEditor.focus(editor);
      Transforms.insertNodes(editor, createDividerElement());
      Transforms.insertNodes(editor, createParagraphNode());
    }
  }

  return (
    <ButtonBase onClick={insertDivider}>
      <ImageIcon className="h-6" />
    </ButtonBase>
  );
};
