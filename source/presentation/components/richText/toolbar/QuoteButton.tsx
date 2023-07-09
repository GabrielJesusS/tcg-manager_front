import QuoteIcon from "@/presentation/public/images/icons/editor/quote-close.svg";
import { Editor, Element, Transforms } from "slate";
import { ButtonBase } from "./ButtonBase";
import { ELEMENT_TYPES_ENUM } from "@/presentation/enums/ElementTypes";
import { ReactEditor } from "slate-react";
import { ColorEnum } from "@/presentation/enums/ColorEnum";
import { useMemo } from "react";
import {
  CustomElement,
  CustomText,
  QuoteElement,
} from "@/presentation/@types/slate";
import { Range } from "slate";

interface IQuoteButton {
  editor: Editor;
}

function createQuoteElement(
  children: CustomText[] = [{ text: "", color: ColorEnum.BASE }]
): QuoteElement {
  return {
    children,
    type: ELEMENT_TYPES_ENUM.QUOTES,
  };
}

export const QuoteButton = ({ editor }: IQuoteButton) => {
  function insertQuote() {
    const { selection } = editor;

    if (!!selection) {
      const [parentNode] = Editor.parent(editor, selection.focus.path);
      ReactEditor.focus(editor);

      if (isQuote) {
        Transforms.setNodes(editor, { type: ELEMENT_TYPES_ENUM.PARAGRAPH });
        Transforms.deselect(editor);
        Transforms.select(editor, Editor.end(editor, []));
        return;
      }

      if (Range.isCollapsed(selection) && parentNode.children.some((child)=> child.text)) {
        Transforms.insertNodes(
          editor,
          createQuoteElement()
        );
        return;
      }

      Transforms.setNodes(editor, createQuoteElement(parentNode.children as CustomText[]), { split: true });
      Transforms.deselect(editor);
      Transforms.select(editor, Editor.end(editor, []));
    }
  }

  const isQuote = useMemo(() => {
    if (!editor.selection?.focus.path) return false;
    const [parentNode] = Editor.parent(editor, editor.selection?.focus.path);
    return (
      Element.isElement(parentNode) &&
      Element.isElementType(parentNode, ELEMENT_TYPES_ENUM.QUOTES)
    );
  }, [editor.selection]);

  return (
    <ButtonBase onClick={insertQuote} active={isQuote}>
      <QuoteIcon className="h-6" />
    </ButtonBase>
  );
};
