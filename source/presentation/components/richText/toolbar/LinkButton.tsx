import LinkIcon from "@/presentation/public/images/icons/editor/link.svg";
import { ButtonBase } from "./ButtonBase";
import { useSetRecoilState } from "recoil";
import { linkModalAtom } from "@/presentation/store/editor/linkModalAtom";
import { ELEMENT_TYPES_ENUM } from "@/presentation/enums/ElementTypes";
import { useSlateStatic } from "slate-react";
import { checkElementIsActive } from "@/presentation/utils/editor/checkElementIsActive";

export const LinkButton = (): JSX.Element => {
  const editor = useSlateStatic();

  const setOpen = useSetRecoilState(linkModalAtom);

  function handleClick(): void {
    setOpen(true);
  }

  return (
    <ButtonBase onClick={handleClick} active={checkElementIsActive(editor, ELEMENT_TYPES_ENUM.LINK)}>
      <LinkIcon className="h-6" />
    </ButtonBase>
  );
};
