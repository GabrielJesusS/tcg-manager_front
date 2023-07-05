import { useRecoilState } from "recoil";
import { DefaultQuestionModal } from "./DefaultQuestionModal";
import {
  linkModalAtom,
  linkURLAtom,
} from "@/presentation/store/editor/linkModalAtom";
import { useSelected, useSlate } from "slate-react";
import { useState } from "react";
import { Transforms } from "slate";
import { useLink } from "@/presentation/hooks/richTextEditor/useLink";

export const LinkEditModal = () => {
  const [open, setOpen] = useRecoilState(linkModalAtom);
  const [i, setI] = useState("");
  const editor = useSlate();
  const { insertLink } = useLink(editor)



  function handleClick(){
    insertLink(editor, i)
    setOpen(false)
  }

  return (
    <DefaultQuestionModal
      isOpen={open}
      close={setOpen}
      action={{ actionText: "Salvar link", actionClick: handleClick}}
    >
      <div>Opan meu amigo, salve salve KKK </div>
      <div>{i}</div>
      <input type="text" value={i} onChange={(e) => setI(e.target.value)} />
    </DefaultQuestionModal>
  );
};
