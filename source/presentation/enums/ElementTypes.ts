import classNames from "classnames";
import {
  CustomElement,
  ImageElement,
  LinkElement,
  ParagraphElement,
  QuoteElement,
} from "../@types/slate";
import {
  ALIGNMENT_BLOCK_CLASS_MAP,
  ALIGNMENT_TEXT_CLASS_MAP,
} from "./AlignmentEnum";
import { ASPECT_RATIO_MAP } from "./AspectRatioEnum";
import { SIZE_MAP } from "./ImageSizeEnum";
import { BEHAVIOR_MAP } from "./ImageBehaviorEnum";

export enum ElementTypesEnum {
  PARAGRAPH = "paragraph",
  SMALL = "small",
  HEADING_ONE = "headingOne",
  HEADING_TWO = "headingTwo",
  SUBHEADING = "subheading",
  LINK = "link",
  QUOTES = "quotes",
  LIST = "list",
  NUMBERED_LIST = "numberedList",
  LIST_ITEM = "listItem",
  DIVIDER = "divider",
  IMAGE = "image",
}

export const LIST_ELEMENTS = [
  ElementTypesEnum.NUMBERED_LIST,
  ElementTypesEnum.LIST,
];

export const ELEMENT_BLOCKS: Record<
  string,
  (node?: CustomElement, children?: string) => string
> = {
  [ElementTypesEnum.PARAGRAPH]: (
    node: ParagraphElement,
    children: string
  ): string =>
    `<p class=" break-all ${ALIGNMENT_TEXT_CLASS_MAP[node.alignment]}">${children}</p>`,
  [ElementTypesEnum.LINK]: (node: LinkElement, children: string): string =>
    `<a href="${node.href}">${children}</a>`,
  [ElementTypesEnum.IMAGE]: (node: ImageElement): string =>
    `<div class="w-full flex"><img src="${node.key}" class="${classNames(
      ASPECT_RATIO_MAP[node.aspectRatio],
      SIZE_MAP[node.size],
      BEHAVIOR_MAP[node.behavior],
      ALIGNMENT_BLOCK_CLASS_MAP[node.alignment]
    )}"/></div>`,
  [ElementTypesEnum.QUOTES]: (node: QuoteElement, children: string): string =>
    `<blockquote class="${
      ALIGNMENT_TEXT_CLASS_MAP[node.alignment]
    }"><cite>${children}</cite></blockquote>`,
  [ElementTypesEnum.LIST]: (_: unknown, children: string): string =>
    `<ul class="list-disc ml-4">${children}</ul>`,
  [ElementTypesEnum.LIST_ITEM]: (_: unknown, children: string): string =>
    `<li>${children}</li>`,
  [ElementTypesEnum.NUMBERED_LIST]: (_: unknown, children: string): string =>
    `<ol class="list-decimal ml-4">${children}</ol>`,
  [ElementTypesEnum.SMALL]: (
    node: ParagraphElement,
    children: string
  ): string =>
    `<small class=" break-all ${
      ALIGNMENT_TEXT_CLASS_MAP[node.alignment]
    }">${children}</small>`,
  [ElementTypesEnum.HEADING_ONE]: (
    node: ParagraphElement,
    children: string
  ): string =>
    `<h2 class="text-3xl break-all  ${
      ALIGNMENT_TEXT_CLASS_MAP[node.alignment]
    }">${children}</h2>`,
  [ElementTypesEnum.HEADING_TWO]: (
    node: ParagraphElement,
    children: string
  ): string =>
    `<h3 class="text-2xl break-all  ${
      ALIGNMENT_TEXT_CLASS_MAP[node.alignment]
    }">${children}</h3>`,
  [ElementTypesEnum.SUBHEADING]: (
    node: ParagraphElement,
    children: string
  ): string =>
    `<h4 class=" break-all  ${ALIGNMENT_TEXT_CLASS_MAP[node.alignment]}">${children}</h4>`,
};
