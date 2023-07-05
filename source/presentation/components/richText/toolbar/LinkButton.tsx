import LinkIcon from "@/presentation/public/images/icons/editor/link.svg";
import { Editor } from "slate";
import { ButtonBase } from "./ButtonBase";
import { useLink } from "@/presentation/hooks/richTextEditor /useLink";
import { useRecoilState } from "recoil";
import { linkModalAtom } from "@/presentation/store/editor/linkModalAtom";

interface ILinkButton {
  editor: Editor;
}

export const LinkButton = ({ editor }: ILinkButton) => {
  const [open, setOpen] = useRecoilState(linkModalAtom);

  function handleClick() {
    setOpen(true);
  }

  return (
    <ButtonBase onClick={handleClick}>
      <LinkIcon className="h-6" />
    </ButtonBase>
  );
};
