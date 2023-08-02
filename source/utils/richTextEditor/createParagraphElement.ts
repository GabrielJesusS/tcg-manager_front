import { ParagraphElement } from "@/presentation/@types/slate";
import { AlignmentEnum } from "@/presentation/enums/AlignmentEnum";
import { ColorEnum } from "@/presentation/enums/ColorEnum";
import { ElementTypesEnum } from "@/presentation/enums/ElementTypes";

export function createParagraphNode(
  children = [
    { text: "", color: ColorEnum.BASE},
  ]
): ParagraphElement {
  return {
    type: ElementTypesEnum.PARAGRAPH,
    alignment: AlignmentEnum.LEFT,
    children,
  };
}
