import ImageIcon from "@/presentation/public/images/icons/editor/image.svg";
import { Editor, Element } from "slate";
import { ButtonBase } from "./ButtonBase";
import { ElementTypesEnum } from "@/presentation/enums/ElementTypes";
import { useSetRecoilState } from "recoil";
import { imageModalAtom } from "@/presentation/store/editor/imageModalAtom";
import { useMemo } from "react";
import { useSlate } from "slate-react";
import { useLockBody } from "@/presentation/hooks/useLockBody";

export const ImageButton = (): JSX.Element => {
  const editor = useSlate();
  const [lock] = useLockBody();
  const setModalOpen = useSetRecoilState(imageModalAtom);
  const isImage = useMemo(() => {
    if (!editor.selection?.focus.path) return false;
    const [parentNode] = Editor.parent(editor, editor.selection?.focus.path);
    return Element.isElementType(parentNode, ElementTypesEnum.IMAGE);
  }, [editor.children, editor.selection?.focus.path]);

  function handleClick(): void {
    setModalOpen(true);
    lock()
  }
  
  return (
    <ButtonBase onClick={handleClick} active={isImage}>
      <ImageIcon className="h-6" />
    </ButtonBase>
  );
};
