import { ImageElement } from "@/presentation/@types/slate";
import { AspectRatioEnum } from "@/presentation/enums/AspectRatioEnum";
import { ColorEnum } from "@/presentation/enums/ColorEnum";
import { ELEMENT_TYPES_ENUM } from "@/presentation/enums/ElementTypes";
import { ImageBehaviorEnum } from "@/presentation/enums/ImageBehaviorEnum";
import { ImageSizeEnum } from "@/presentation/enums/ImageSizeEnum";

export function createImageElement(src: string): ImageElement {
  return {
    children: [{ text: "", color: ColorEnum.BASE }],
    type: ELEMENT_TYPES_ENUM.IMAGE,
    aspectRatio: AspectRatioEnum.WIDE,
    behavior: ImageBehaviorEnum.AUTO,
    size: ImageSizeEnum.FULL,
    src,
  };
}