import { useRecoilState } from "recoil";
import { DefaultQuestionModal } from "./DefaultQuestionModal";
import { linkModalAtom } from "@/presentation/store/editor/linkModalAtom";
import { useSlate } from "slate-react";
import { useState } from "react";
import { useLink } from "@/presentation/hooks/richTextEditor/useLink";
import { TextInput } from "../Textinput";

export const LinkEditModal = (): JSX.Element => {
  const [open, setOpen] = useRecoilState(linkModalAtom);
  const [i, setI] = useState("");
  const editor = useSlate();
  const { insertLink } = useLink(editor);

  function handleClick(): void {
    insertLink(editor, i);
    setOpen(false);
  }

  return (
    <DefaultQuestionModal
      isOpen={open}
      small
      close={() => {
        setOpen(false);
      }}
      action={{ actionText: "Salvar link", actionClick: handleClick }}
    >
      <div className="my-safe">
        <TextInput
          type="text"
          value={i}
          label="URL:"
          onChange={(e) => {
            setI(e.target.value);
          }}
        />
      </div>
    </DefaultQuestionModal>
  );
};
