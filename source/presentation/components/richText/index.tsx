import { useState } from "react";
import { Descendant, Editor, Element, Text, createEditor } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import { ToolBar } from "./toolbar";
import { useRenderElement } from "@/presentation/hooks/richTextEditor/useRenderElements";
import { ELEMENT_TYPES_ENUM } from "@/presentation/enums/ElementTypes";
import { LinkEditModal } from "../common/modals/LinkEditModal";
import { withLink } from "./elements/plugins/withLink";
import { useRenderLeafs } from "@/presentation/hooks/richTextEditor/useRenderLeafs";
import { withImage } from "./elements/plugins/withImage";
import { ImageEditModal } from "./elements/modals/ImageEditModal";
import { COLOR_TEXT_MAP } from "@/presentation/enums/ColorEnum";
import classNames from "classnames";
import {
  ASPECT_RATIO_MAP,
  BEHAVIOR_MAP,
  SIZE_MAP,
} from "./elements/void/Image";
import { ALIGNMENT_BLOCK_CLASS_MAP, ALIGNMENT_TEXT_CLASS_MAP } from "@/presentation/enums/AlignmentEnum";

const iniValTest = [
  {
    type: "paragraph",
    alignment: "left",
    children: [
      {
        text: "asdasdasdasd",
        color: "base",
        isBold: true,
      },
    ],
  },
  {
    type: "paragraph",
    alignment: "left",
    children: [
      {
        color: "base",
        text: "asdasdas",
        isItalic: true,
      },
    ],
  },
  {
    type: "paragraph",
    alignment: "left",
    children: [
      {
        color: "base",
        text: "asdasdasd",
        isUnderline: true,
      },
    ],
  },
  {
    type: "paragraph",
    alignment: "left",
    children: [
      {
        color: "base",
        text: "a",
      },
      {
        color: "base",
        text: "sd",
        isBold: true,
      },
      {
        color: "base",
        text: "as",
        isItalic: true,
      },
      {
        color: "base",
        text: "da",
        isUnderline: true,
      },
      {
        color: "base",
        text: "sd",
      },
    ],
  },
  {
    type: "paragraph",
    alignment: "left",
    children: [
      {
        color: "base",
        text: "asdasdasdasdasdas",
        isBold: true,
        isItalic: true,
        isUnderline: true,
      },
    ],
  },
  {
    type: "paragraph",
    alignment: "left",
    children: [
      {
        text: "",
      },
      {
        type: "link",
        href: "teste",
        children: [
          {
            color: "base",
            text: "asdasdasdasdasd",
            isLink: true,
          },
        ],
        alignment: "left",
      },
      {
        text: "",
      },
    ],
  },
  {
    type: "quotes",
    alignment: "left",
    children: [
      {
        color: "base",
        text: "asdasdasdasdasd",
      },
    ],
  },
  {
    type: "numberedList",
    children: [
      {
        type: "listItem",
        alignment: "left",
        children: [
          {
            color: "base",
            text: "asdassadsdasd",
          },
        ],
      },
    ],
    alignment: "left",
  },
  {
    type: "list",
    children: [
      {
        type: "listItem",
        alignment: "left",
        children: [
          {
            color: "base",
            text: "asdasdasdasd",
          },
        ],
      },
    ],
    alignment: "left",
  },
  {
    type: "paragraph",
    alignment: "center",
    children: [
      {
        color: "base",
        text: "asdasdasdasd",
      },
    ],
  },
  {
    type: "paragraph",
    alignment: "right",
    children: [
      {
        color: "base",
        text: "asdasdasdasd",
      },
    ],
  },
  {
    type: "paragraph",
    alignment: "left",
    children: [
      {
        color: "warning",
        text: "asdasdasdasd",
      },
    ],
  },
  {
    children: [
      {
        text: "",
        color: "base",
      },
    ],
    type: "image",
    alignment: "center",
    aspectRatio: "16/9",
    behavior: "fill",
    size: "seventy-five",
    src: "https://i.kym-cdn.com/entries/icons/facebook/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.jpg",
  },
  {
    type: "paragraph",
    alignment: "left",
    children: [
      {
        text: "",
        color: "base",
      },
    ],
  },
];

export const RichText = (): JSX.Element => {
  const serialize = (node: Descendant): string => {
    if (Text.isText(node)) {
      let strings = node.text;

      if (node.isItalic) {
        strings = `<em>${strings}</em>`;
      }

      if (node.isBold) {
        strings = `<strong>${strings}</strong>`;
      }

      if (node.color && !node.isLink) {
        strings = `<span class="${
          COLOR_TEXT_MAP[node.color]
        }">${strings}</span>`;
      }

      if (node.isUnderline) {
        strings = `<span class="underline">${strings}</span>`;
      }

      return strings;
    }

    const children = node.children.map((n) => serialize(n)).join("");

    switch (node.type) {
      case ELEMENT_TYPES_ENUM.PARAGRAPH:
        return `<p class="${ALIGNMENT_TEXT_CLASS_MAP[node.alignment]}">${children}</p>`;
      case ELEMENT_TYPES_ENUM.LINK:
        return `<a href="${node.href}">${children}</a>`;
      case ELEMENT_TYPES_ENUM.IMAGE:
        return `<div class="w-full flex ${
          ALIGNMENT_BLOCK_CLASS_MAP[node.alignment]
        }"><img src="${node.src}" class="${classNames(
          ASPECT_RATIO_MAP[node.aspectRatio],
          SIZE_MAP[node.size],
          BEHAVIOR_MAP[node.behavior]
        )}"/></div>`;
      case ELEMENT_TYPES_ENUM.QUOTES:
        return `<blockquote><cite>${children}</cite></blockquote>`;
      case ELEMENT_TYPES_ENUM.LIST:
        return `<ul class="list-disc ml-4">${children}</ul>`;
      case ELEMENT_TYPES_ENUM.LIST_ITEM:
        return `<li>${children}</li>`;
      case ELEMENT_TYPES_ENUM.NUMBERED_LIST:
        return `<ol class="list-decimal ml-4">${children}</ol>`;
      default:
        return children;
    }
  };

  const [editor] = useState(() =>
    withImage(withLink(withReact(createEditor())))
  );
  const { renderElement } = useRenderElement();
  const { renderLeafs } = useRenderLeafs();
  /* const initialValue: Descendant[] = [createParagraphNode()];
   */

  function handleSendArticle(): void {
    const x = editor.children
      .flatMap(serialize)
      .reduce((acc, item) => acc + item, "");
    console.log(x);
  }

  return (
    <div className="border-2 border-system-100 flex-1 w-full h-full flex flex-col">
      <Slate editor={editor} value={iniValTest as Descendant[]}>
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
        <button onClick={handleSendArticle}>teste</button>
      </div>
    </div>
  );
};
