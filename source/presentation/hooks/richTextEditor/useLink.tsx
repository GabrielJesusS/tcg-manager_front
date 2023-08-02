import { AlignmentEnum } from "@/presentation/enums/AlignmentEnum";
import { ColorEnum } from "@/presentation/enums/ColorEnum";
import { ElementTypesEnum } from "@/presentation/enums/ElementTypes";
import { Editor, Transforms, Element, Path, Range } from "slate";
import { ReactEditor } from "slate-react";

interface IUseLink {
  insertLink: (editor: Editor, url: string) => void;
  removeLink: () => void;
}

export function useLink(editor: Editor): IUseLink {
  const createLinkNode = (
    href: string,
    text: string,
    color: ColorEnum
  ): Element => ({
    type: ElementTypesEnum.LINK,
    href,
    children: [{ text, color, isLink: true }],
    alignment: AlignmentEnum.LEFT,
  });

  const createParagraphNode = (
    children = [{ text: "", color: ColorEnum.BASE }]
  ): Element => ({
    type: ElementTypesEnum.PARAGRAPH,
    children,
    alignment: AlignmentEnum.LEFT,
  });

  function removeLink(): void {
    Editor.removeMark(editor, "isLink");
    Transforms.unwrapNodes(editor, {
      match: (n) =>
        !Editor.isEditor(n) && Element.isElement(n) && n.type === "link",
    });
  }

  function insertLink(editor: Editor, url: string): void {
    if (!url) return;
    const { selection } = editor;

    const link = createLinkNode(url, "New Link", ColorEnum.BASE);

    ReactEditor.focus(editor);

    Editor.addMark(editor, "isLink", true);

    if (selection) {
      const [parentNode, parentPath] = Editor.parent(
        editor,
        selection.focus?.path
      );

      // Remove the Link node if we're inserting a new link node inside of another
      // link.
      if (
        Element.isElement(parentNode) &&
        parentNode.type === ElementTypesEnum.LINK
      ) {
        removeLink();
      }

      if (editor.isVoid(parentNode as Element)) {
        // Insert the new link after the void node
        console.log(link);
        Transforms.insertNodes(
          editor,
          createParagraphNode([...link.children]),
          {
            at: Path.next(parentPath),
            select: true,
          }
        );
      } else if (Range.isCollapsed(selection)) {
        // Insert the new link in our last known location
        Transforms.insertNodes(editor, link, { select: true });
      } else {
        // Wrap the currently selected range of text into a Link
        Transforms.wrapNodes(editor, link, { split: true });
        // Remove the highlight and move the cursor to the end of the highlight
        Transforms.collapse(editor, { edge: "end" });
      }
    } else {
      // Insert the new link node at the bottom of the Editor when selection
      // is falsey
      Transforms.insertNodes(editor, createParagraphNode([...link.children]));
    }
  }

  return { insertLink, removeLink };
}
