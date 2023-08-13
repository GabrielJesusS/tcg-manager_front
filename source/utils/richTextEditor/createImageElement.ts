import { ImageElement } from "@/presentation/@types/slate";
import { AlignmentEnum } from "@/presentation/enums/AlignmentEnum";
import { AspectRatioEnum } from "@/presentation/enums/AspectRatioEnum";
import { ColorEnum } from "@/presentation/enums/ColorEnum";
import { ElementTypesEnum } from "@/presentation/enums/ElementTypes";
import { ImageBehaviorEnum } from "@/presentation/enums/ImageBehaviorEnum";
import { ImageSizeEnum } from "@/presentation/enums/ImageSizeEnum";
import { generateRandomId } from "../generateRandomId";

export function createImageElement(src: string, name: string): ImageElement {
  return {
    children: [{ text: "", color: ColorEnum.BASE }],
    type: ElementTypesEnum.IMAGE,
    alignment: AlignmentEnum.CENTER,
    aspectRatio: AspectRatioEnum.WIDE,
    behavior: ImageBehaviorEnum.AUTO,
    size: ImageSizeEnum.FULL,
    src,
    name,
    key: generateRandomId(),
  };
}
