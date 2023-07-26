import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";
import { ELEMENT_TYPES_ENUM } from "../enums/ElementTypes";
import { ColorEnum } from "../enums/ColorEnum";
import { AlignmentEnum } from "../enums/AlignmentEnum";

export interface ParagraphElement {
  type: ELEMENT_TYPES_ENUM.PARAGRAPH;
  children: CustomText[];
  alignment: AlignmentEnum;
}

export interface SmallElement {
  type: ELEMENT_TYPES_ENUM.SMALL;
  children: CustomText[];
  alignment: AlignmentEnum;
}

export interface HeadingOneElement {
  type: ELEMENT_TYPES_ENUM.HEADING_TWO;
  children: CustomText[];
  alignment: AlignmentEnum;
}

export interface HeadingTwoElement {
  type: ELEMENT_TYPES_ENUM.HEADING_ONE;
  children: CustomText[];
  alignment: AlignmentEnum;
}

export interface SubheadingElement {
  type: ELEMENT_TYPES_ENUM.SUBHEADING;
  children: CustomText[];
  alignment: AlignmentEnum;
}

export interface LinkElement {
  type: ELEMENT_TYPES_ENUM.LINK;
  children: CustomText[];
  href: string;
  alignment: AlignmentEnum;
}

export interface QuoteElement {
  type: ELEMENT_TYPES_ENUM.QUOTES;
  children: CustomText[];
  alignment: AlignmentEnum;
}

export interface ListElement {
  type: ELEMENT_TYPES_ENUM.LIST;
  children: CustomText[];
  alignment: AlignmentEnum;
}

export interface NumberedListElement {
  type: ELEMENT_TYPES_ENUM.NUMBERED_LIST;
  children: CustomText[];
  alignment: AlignmentEnum;
}

export interface ListItemElement {
  type: ELEMENT_TYPES_ENUM.LIST_ITEM;
  children: CustomText[];
  alignment: AlignmentEnum;
}

export interface ImageElement {
  type: ELEMENT_TYPES_ENUM.IMAGE;
  children: CustomText[];
  alignment: AlignmentEnum;
  aspectRatio: string;
  size: string;
  behavior: string;
  src: string;
}

type CustomElement =
  | ParagraphElement
  | SmallElement
  | HeadingTwoElement
  | HeadingTwoElement
  | SubheadingElement
  | QuoteElement
  | LinkElement
  | ListElement
  | ImageElement
  | NumberedListElement
  | ListItemElement;

interface CustomText {
  text: string;
  isBold?: boolean;
  isItalic?: boolean;
  isUnderline?: boolean;
  isLink?:boolean;
  color: ColorEnum;
}

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
