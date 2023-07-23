import { KeyboardEvent, useState } from "react";
import {
  Descendant,
  Editor,
  Element,
  Node,
  Text,
  Transforms,
  createEditor,
} from "slate";
import { Editable, RenderLeafProps, Slate, withReact } from "slate-react";
import { ToolBar } from "./toolbar";
import { useRenderElement } from "@/presentation/hooks/richTextEditor/useRenderElements";
import classNames from "classnames";
import { ELEMENT_TYPES_ENUM } from "@/presentation/enums/ElementTypes";
import { LinkEditModal } from "../common/modals/LinkEditModal";
import { withLink } from "./elements/plugins/withLink";
import { useRenderLeafs } from "@/presentation/hooks/richTextEditor/useRenderLeafs";
import { ColorEnum } from "@/presentation/enums/ColorEnum";
import { withImage } from "./elements/plugins/withImage";
import { ImageEditModal } from "./elements/modals/ImageEditModal";
import { createParagraphNode } from "@/utils/richTextEditor/createParagraphElement";

function key(evt: KeyboardEvent<HTMLDivElement>): void {}

export const RichText = ({}) => {
  const serialize = (node: Descendant) => {
    if (Text.isText(node)) {
      let strings = node.text;
      if (node.isBold) {
        strings = `<strong>${strings}</strong>`;
      }
      return strings;
    }

    const children = node.children.map((n) => serialize(n)).join("");

    switch (node.type) {
      case "paragraph":
        return `<p>${children}</p>`;
      case "link":
        return `<a href="${node.href}">${children}</a>`;
      default:
        return children;
    }
  };

  const [editor] = useState(() =>
    withImage(withLink(withReact(createEditor())))
  );
  const { renderElement } = useRenderElement();
  const { renderLeafs } = useRenderLeafs();
  const initialValue: Descendant[] = [createParagraphNode()];

  return (
    <div className="border-2 border-system-100 flex-1 w-full h-full flex flex-col">
      <Slate editor={editor} value={initialValue}>
        <ToolBar />
        <Editable
          renderLeaf={renderLeafs}
          renderElement={renderElement}
          className="max-w-full flex-1 p-2"
          placeholder="Um grande artigo..."
          onKeyDown={(e) => {
            if (e.key === "Backspace") {
              const prev = Editor.previous(editor, {
                at: editor.selection?.focus,
              });

              if (!prev) return;

              const [prevNode] = prev;

              if (Element.isElementType(prevNode, ELEMENT_TYPES_ENUM.IMAGE)) {
                e.preventDefault();
                
              }

              
            }
          }}
        />
        <LinkEditModal />
        <ImageEditModal />
      </Slate>
      <div>
        <button onClick={() => console.log(editor.children)}>teste</button>
      </div>
    </div>
  );
};
