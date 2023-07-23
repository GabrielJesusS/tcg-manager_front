import { useSlate } from "slate-react";
import { BoldButton } from "./BoldButton";
import { TextLevelSelector } from "./TextLevelSelector";
import { LinkButton } from "./LinkButton";
import { useSetRecoilState } from "recoil";
import { linkModalAtom } from "@/presentation/store/editor/linkModalAtom";
import { ImageButton } from "./ImageButton";
import { ItalicButton } from "./ItalicButton";
import { UnderlineButton } from "./UnderlineButton";
import { QuoteButton } from "./QuoteButton";
import { ListButton } from "./ListButton";
import { ColorPicker } from "./ColorPicker";
import { AlignmentButton } from "./AlignmentButton";

export const ToolBar = ({}) => {
  const editor = useSlate();
  const openModal = useSetRecoilState(linkModalAtom);

  return (
    <div className="bg-system-100 h-fit py-1 w-full flex flex-col md:flex-row md:space-x-8 px-safe md:space-y-0 space-y-2 pb-4 md:pb-1">
      <TextLevelSelector editor={editor} />
      <div className="md:space-x-2 grid grid-cols-4 sm:grid-cols-6 md:flex gap-4 md:flex-wrap">
        <BoldButton editor={editor} />
        <ItalicButton editor={editor} />
        <UnderlineButton editor={editor} />
        <QuoteButton editor={editor} />
        <LinkButton editor={editor} />
        <ListButton editor={editor} />
        <AlignmentButton/>
        <ImageButton editor={editor} />
        <ColorPicker editor={editor}/>
      </div>
    </div>
  );
};
