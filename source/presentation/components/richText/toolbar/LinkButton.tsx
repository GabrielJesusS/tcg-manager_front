import LinkIcon from "@/presentation/public/images/icons/editor/link.svg";
import { Editor, Element } from "slate";
import { ButtonBase } from "./ButtonBase";
import { useRecoilState } from "recoil";
import { linkModalAtom } from "@/presentation/store/editor/linkModalAtom";
import { useMemo } from "react";
import { ELEMENT_TYPES_ENUM } from "@/presentation/enums/ElementTypes";

interface ILinkButton {
  editor: Editor;
}

export const LinkButton = ({ editor }: ILinkButton) => {
  const [open, setOpen] = useRecoilState(linkModalAtom);

  const isLink = useMemo(() => {
    if (!editor.selection?.focus.path) return false;
    const [parentNode] = Editor.parent(editor, editor.selection?.focus.path);
    return Element.isElementType(parentNode, ELEMENT_TYPES_ENUM.LINK);
  }, [editor.selection?.focus.path]);

  function handleClick() {
    
    setOpen(true);
  }

  return (
    <ButtonBase onClick={handleClick} active={isLink}>
      <LinkIcon className="h-6" />
    </ButtonBase>
  );
};
