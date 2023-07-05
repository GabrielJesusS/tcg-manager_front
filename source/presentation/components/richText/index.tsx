import { useCallback, useState } from "react";
import { Descendant, Editor, Node, Text, createEditor} from "slate";
import { Editable, RenderLeafProps, Slate, withReact } from "slate-react";
import { ToolBar } from "./toolbar";
import { useRenderElement } from "@/presentation/hooks/useRenderElements";
import classNames from "classnames";
import { ELEMENT_TYPES_ENUM } from "@/presentation/enums/ElementTypes";
import { LinkEditModal } from "../common/modals/LinkEditModal";
import { withLink} from "./elements/plugins/withLink";

export const RichText = ({}) => {

  const serialize = (node: Descendant) => {
    if (Text.isText(node)) {
      let strings = node.text
      if (node.isBold) {
        strings = `<strong>${strings}</strong>`
      }
      return strings
    }
  
    const children = node.children.map(n => serialize(n)).join('')
  
    switch (node.type) {
      case 'paragraph':
        return `<p>${children}</p>`
      case 'link':
        return `<a href="${node.href}">${children}</a>`
      default:
        return children
    }
  }


  const [editor] = useState(() => withLink(withReact(createEditor())));
  const { renderElement } = useRenderElement();
  const initialValue: Descendant[] = [
    {
      type: ELEMENT_TYPES_ENUM.PARAGRAPH,
      children: [{ text: "V", isBold: false }],
    },
  ];

  const renderLeaf = useCallback(
    (props: RenderLeafProps) => {

      return (
        <span
        className={classNames({'font-bold': props.leaf.isBold})}
          {...props.attributes}
        >
          {props.children}
        </span>
      );
    },
    []
  );

  return (
    <div className="border-2 border-system-100 flex-1 w-full">
      <Slate editor={editor} value={initialValue}>
        <ToolBar></ToolBar>
        <Editable
          renderLeaf={renderLeaf}
          renderElement={renderElement}
          className="max-w-full flex-1 p-2"
          placeholder="dwadawda"
        />
        <LinkEditModal/>
      </Slate>
      <div>
        <button onClick={()=> console.log(editor.children.flatMap(serialize))}>teste</button>
      </div>
    </div>
  );
};
