import {
  CustomElement,
  ImageElement,
  LinkElement,
} from "@/presentation/@types/slate";
import {
  ALIGNMENT_BLOCK_CLASS_MAP,
  ALIGNMENT_TEXT_CLASS_MAP,
  AlignmentEnum,
} from "@/presentation/enums/AlignmentEnum";
import { invertClassMapping } from "./invertClassMapping";
import { ASPECT_RATIO_MAP } from "@/presentation/enums/AspectRatioEnum";
import { SIZE_MAP } from "@/presentation/enums/ImageSizeEnum";
import { BEHAVIOR_MAP } from "@/presentation/enums/ImageBehaviorEnum";

const ALIGNMENT_CLASS_TEXT = invertClassMapping(ALIGNMENT_TEXT_CLASS_MAP);
const ALIGNMENT_CLASS_BLOCK = invertClassMapping(ALIGNMENT_BLOCK_CLASS_MAP);
const IMAGE_ASPECT = invertClassMapping(ASPECT_RATIO_MAP);
const IMAGE_SIZE = invertClassMapping(SIZE_MAP);
const IMAGE_BEHAVIOR = invertClassMapping(BEHAVIOR_MAP);

export function returnElementAttributes(el: Node): Partial<CustomElement> {
  let nodeAttributes: Partial<CustomElement> = {};
  let linkAttributes: Partial<LinkElement> = {};
  let imageAttributes: Partial<ImageElement> = {};

  if (el instanceof HTMLElement) {
    if (el instanceof HTMLImageElement) {
      Array.from(el.classList).forEach((cls) => {
        if (IMAGE_ASPECT[cls]) {
          imageAttributes.aspectRatio = IMAGE_ASPECT[cls] as string;
        }

        if (IMAGE_SIZE[cls]) {
          imageAttributes.size = IMAGE_SIZE[cls] as string;
        }

        if (IMAGE_BEHAVIOR[cls]) {
          imageAttributes.behavior = IMAGE_BEHAVIOR[cls] as string;
        }
      });

      const src = el.getAttribute("src");
      imageAttributes.src = src || "";
    }

    if (el instanceof HTMLAnchorElement) {
      const link = el.getAttribute("href");
      if (link) linkAttributes.href = link;
    }

    const alignment =
      Array.from(el.classList).find(
        (e) =>
          Object.keys(ALIGNMENT_CLASS_TEXT).includes(e) ||
          Object.keys(ALIGNMENT_CLASS_BLOCK).includes(e)
      ) || "text-left";
    nodeAttributes.alignment =
      ((ALIGNMENT_CLASS_TEXT[alignment] || ALIGNMENT_CLASS_BLOCK[alignment]) as
        | AlignmentEnum
        | undefined) || AlignmentEnum.LEFT;
  }

  return { ...nodeAttributes, ...linkAttributes, ...imageAttributes };
}
