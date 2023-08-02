import ListIcon from "@/presentation/public/images/icons/editor/list-bulleted.svg";
import { ButtonBase } from "./ButtonBase";
import { ElementTypesEnum } from "@/presentation/enums/ElementTypes";
import { useSlate } from "slate-react";
import { toggleEditorElement } from "@/presentation/utils/editor/toggleEditorElement";
import { checkElementIsActive } from "@/presentation/utils/editor/checkElementIsActive";

export const ListButton = (): JSX.Element => {
  const editor = useSlate();

  function handleClick(): void {
    toggleEditorElement(editor, ElementTypesEnum.LIST);
  }

  return (
    <ButtonBase
      onClick={handleClick}
      active={checkElementIsActive(editor, ElementTypesEnum.LIST)}
    >
      <ListIcon className="h-6" />
    </ButtonBase>
  );
};
