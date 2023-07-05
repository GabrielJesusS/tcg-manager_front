import { useSlate } from "slate-react";
import { BoldButton } from "./BoldButton";
import { TextLevelSelector } from "./TextLevelSelector";
import { LinkButton } from "./LinkButton";
import { useSetRecoilState } from "recoil";
import { linkModalAtom } from "@/presentation/store/editor/linkModalAtom";

export const ToolBar = ({}) => {

    const editor = useSlate();
    const openModal = useSetRecoilState(linkModalAtom)
    
  return <div className="bg-system-100 h-fit py-1 w-full flex space-x-8 px-safe">
    <TextLevelSelector editor={editor}/>
    <BoldButton editor={editor}/>
    <LinkButton editor={editor}/>
    <button onClick={()=> openModal(true)}>salve rapaize kkk</button>
  </div>;
};
