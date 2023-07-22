import { ParagraphElement } from "@/presentation/@types/slate";
import { ColorEnum } from "@/presentation/enums/ColorEnum";
import { ELEMENT_TYPES_ENUM } from "@/presentation/enums/ElementTypes";

export function createParagraphNode(
  children = [{ text: "", color: ColorEnum.BASE }]
): ParagraphElement {
  return {
    type: ELEMENT_TYPES_ENUM.PARAGRAPH,
    children,
  };
}
