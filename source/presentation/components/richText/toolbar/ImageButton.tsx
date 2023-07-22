import ImageIcon from "@/presentation/public/images/icons/editor/image.svg";
import { Editor, Element} from "slate";
import { ButtonBase } from "./ButtonBase";
import { ELEMENT_TYPES_ENUM } from "@/presentation/enums/ElementTypes";
import { useSetRecoilState } from "recoil";
import { imageModalAtom } from "@/presentation/store/editor/imageModalAtom";
import { useMemo } from "react";

interface IImageButton {
  editor: Editor;
}


export const ImageButton = ({ editor }: IImageButton) => {
  const setModalOpen = useSetRecoilState(imageModalAtom);
  const isImage = useMemo(() => {
    if (!editor.selection?.focus.path) return false;
    const [parentNode] = Editor.parent(editor, editor.selection?.focus.path);
    return Element.isElementType(parentNode, ELEMENT_TYPES_ENUM.IMAGE);
  }, [editor.children , editor.selection?.focus.path]);

  return (
    <ButtonBase onClick={()=> setModalOpen(true)} active={isImage}>
      <ImageIcon className="h-6" />
    </ButtonBase>
  );
};
