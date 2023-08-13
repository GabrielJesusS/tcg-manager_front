import { useState } from "react";
import { Descendant, createEditor } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import { ToolBar } from "./toolbar";
import { useRenderElement } from "@/presentation/hooks/richTextEditor/useRenderElements";
import { LinkEditModal } from "../common/modals/LinkEditModal";
import { withLink } from "./elements/plugins/withLink";
import { useRenderLeafs } from "@/presentation/hooks/richTextEditor/useRenderLeafs";
import { withImage } from "./elements/plugins/withImage";
import { ImageEditModal } from "./elements/modals/ImageEditModal";
import { serialize } from "@/presentation/utils/editor/serializeArticle";
import { keyHandler } from "@/presentation/utils/editor/keyHandler";
import { useSetRecoilState } from "recoil";
import { articleContentAtom } from "@/presentation/store/editor";

export const RichText = (): JSX.Element => {
  const [editor] = useState(() =>
    withImage(withLink(withReact(createEditor())))
  );
  const { renderElement } = useRenderElement();
  const { renderLeafs } = useRenderLeafs();
  /* const initialValue: Descendant[] = [createParagraphNode()];
   */
  const setArticleContent = useSetRecoilState(articleContentAtom);

  function handleChangeArticleContent(content: Descendant[]): void {
    setArticleContent(content);
  }

  return (
    <div className="w-full flex flex-col grow">
      <Slate
        editor={editor}
        value={
          [
            {
              type: "paragraph",
              alignment: "left",
              children: [{ text: "", color: "base" }],
            },
          ] as Descendant[]
        }
        onChange={handleChangeArticleContent}
      >
        <ToolBar />
        <Editable
          renderLeaf={renderLeafs}
          renderElement={renderElement}
          className="max-w-full border-2 p-2 my-5 mx-4 h-full grow"
          placeholder="Um grande artigo..."
          onKeyDown={keyHandler(editor)}
        />
        <LinkEditModal />
        <ImageEditModal />
      </Slate>
    </div>
  );
};
