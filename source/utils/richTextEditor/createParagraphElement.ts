import { ParagraphElement } from "@/presentation/@types/slate";
import { AlignmentEnum } from "@/presentation/enums/AlignmentEnum";
import { ColorEnum } from "@/presentation/enums/ColorEnum";
import { ELEMENT_TYPES_ENUM } from "@/presentation/enums/ElementTypes";

export function createParagraphNode(
  children = [
    { text: "", color: ColorEnum.BASE, alignment: AlignmentEnum.LEFT },
  ]
): ParagraphElement {
  return {
    type: ELEMENT_TYPES_ENUM.PARAGRAPH,
    children,
  };
}
