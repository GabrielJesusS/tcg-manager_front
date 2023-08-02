import LinkIcon from "@/presentation/public/images/icons/editor/link.svg";
import { ButtonBase } from "./ButtonBase";
import { useSetRecoilState } from "recoil";
import { linkModalAtom } from "@/presentation/store/editor/linkModalAtom";
import { ElementTypesEnum } from "@/presentation/enums/ElementTypes";
import { useSlate} from "slate-react";
import { checkElementIsActive } from "@/presentation/utils/editor/checkElementIsActive";

export const LinkButton = (): JSX.Element => {
  const editor = useSlate();

  const setOpen = useSetRecoilState(linkModalAtom);

  function handleClick(): void {
    setOpen(true);
  }

  return (
    <ButtonBase onClick={handleClick} active={checkElementIsActive(editor, ElementTypesEnum.LINK)}>
      <LinkIcon className="h-6" />
    </ButtonBase>
  );
};
