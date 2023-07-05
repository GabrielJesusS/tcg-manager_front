import { ELEMENT_TYPES_ENUM } from "@/presentation/enums/ElementTypes";
import {
  Editor,
  Transforms,
  Element,
  Path,
  Range,
} from "slate";
import { ReactEditor } from "slate-react";

interface IUseLink {
  insertLink: (editor: Editor, url: string) => void;
  removeLink: () => void;
}

export function useLink(editor: Editor): IUseLink {
  const createLinkNode = (href: string, text: string): Element => ({
    type: ELEMENT_TYPES_ENUM.LINK,
    href,
    children: [{ text }],
  });

  const createParagraphNode = (children = [{ text: "" }]): Element => ({
    type: ELEMENT_TYPES_ENUM.PARAGRAPH,
    children,
  });

  function removeLink() {
    Transforms.unwrapNodes(editor, {
      match: (n) =>
        !Editor.isEditor(n) && Element.isElement(n) && n.type === "link",
    });
  }

  function insertLink(editor: Editor, url: string): void {
    if (!url) return;
    const { selection } = editor;

    const link = createLinkNode(url, "New Link");

    ReactEditor.focus(editor);

    if (!!selection) {
      const [parentNode, parentPath] = Editor.parent(
        editor,
        selection.focus?.path
      );

      // Remove the Link node if we're inserting a new link node inside of another
      // link.
      if (
        Element.isElement(parentNode) &&
        parentNode.type === ELEMENT_TYPES_ENUM.LINK
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
      console.log(link);
      Transforms.insertNodes(editor, createParagraphNode([...link.children]));
    }
  }

  return { insertLink, removeLink };
}