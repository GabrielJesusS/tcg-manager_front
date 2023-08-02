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

export enum ELEMENT_TYPES_ENUM {
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
  ELEMENT_TYPES_ENUM.NUMBERED_LIST,
  ELEMENT_TYPES_ENUM.LIST,
];

export const ELEMENT_BLOCKS: Record<
  string,
  (node?: CustomElement, children?: string) => string
> = {
  [ELEMENT_TYPES_ENUM.PARAGRAPH]: (
    node: ParagraphElement,
    children: string
  ): string =>
    `<p class=" break-all ${ALIGNMENT_TEXT_CLASS_MAP[node.alignment]}">${children}</p>`,
  [ELEMENT_TYPES_ENUM.LINK]: (node: LinkElement, children: string): string =>
    `<a href="${node.href}">${children}</a>`,
  [ELEMENT_TYPES_ENUM.IMAGE]: (node: ImageElement): string =>
    `<div class="w-full flex"><img src="${node.src}" class="${classNames(
      ASPECT_RATIO_MAP[node.aspectRatio],
      SIZE_MAP[node.size],
      BEHAVIOR_MAP[node.behavior],
      ALIGNMENT_BLOCK_CLASS_MAP[node.alignment]
    )}"/></div>`,
  [ELEMENT_TYPES_ENUM.QUOTES]: (node: QuoteElement, children: string): string =>
    `<blockquote class="${
      ALIGNMENT_TEXT_CLASS_MAP[node.alignment]
    }"><cite>${children}</cite></blockquote>`,
  [ELEMENT_TYPES_ENUM.LIST]: (_: unknown, children: string): string =>
    `<ul class="list-disc ml-4">${children}</ul>`,
  [ELEMENT_TYPES_ENUM.LIST_ITEM]: (_: unknown, children: string): string =>
    `<li>${children}</li>`,
  [ELEMENT_TYPES_ENUM.NUMBERED_LIST]: (_: unknown, children: string): string =>
    `<ol class="list-decimal ml-4">${children}</ol>`,
  [ELEMENT_TYPES_ENUM.SMALL]: (
    node: ParagraphElement,
    children: string
  ): string =>
    `<small class=" break-all ${
      ALIGNMENT_TEXT_CLASS_MAP[node.alignment]
    }">${children}</small>`,
  [ELEMENT_TYPES_ENUM.HEADING_ONE]: (
    node: ParagraphElement,
    children: string
  ): string =>
    `<h2 class="text-3xl break-all  ${
      ALIGNMENT_TEXT_CLASS_MAP[node.alignment]
    }">${children}</h2>`,
  [ELEMENT_TYPES_ENUM.HEADING_TWO]: (
    node: ParagraphElement,
    children: string
  ): string =>
    `<h3 class="text-2xl break-all  ${
      ALIGNMENT_TEXT_CLASS_MAP[node.alignment]
    }">${children}</h3>`,
  [ELEMENT_TYPES_ENUM.SUBHEADING]: (
    node: ParagraphElement,
    children: string
  ): string =>
    `<h4 class=" break-all  ${ALIGNMENT_TEXT_CLASS_MAP[node.alignment]}">${children}</h4>`,
};
