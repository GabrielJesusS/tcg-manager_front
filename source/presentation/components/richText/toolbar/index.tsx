import { useSlate } from "slate-react";
import { BoldButton } from "./BoldButton";
import { TextLevelSelector } from "./TextLevelSelector";
import { LinkButton } from "./LinkButton";
import { useSetRecoilState } from "recoil";
import { linkModalAtom } from "@/presentation/store/editor/linkModalAtom";
import { DividerButton } from "./DividerButton";
import { ItalicButton } from "./ItalicButton";
import { UnderlineButton } from "./UnderlineButton";
import { QuoteButton } from "./QuoteButton";
import { ListButton } from "./ListButton";
import { ColorPicker } from "./ColorPicker";

export const ToolBar = ({}) => {
  const editor = useSlate();
  const openModal = useSetRecoilState(linkModalAtom);

  return (
    <div className="bg-system-100 h-fit py-1 w-full flex space-x-8 px-safe">
      <TextLevelSelector editor={editor} />
      <div className="space-x-2 flex">
        <BoldButton editor={editor} />
        <ItalicButton editor={editor} />
        <UnderlineButton editor={editor} />
        <QuoteButton editor={editor} />
        <LinkButton editor={editor} />
        <ListButton editor={editor} />
        <DividerButton editor={editor} />
        <ColorPicker editor={editor}/>
      </div>
    </div>
  );
};
