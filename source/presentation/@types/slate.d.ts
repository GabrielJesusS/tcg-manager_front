import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";
import { ElementTypesEnum } from "../enums/ElementTypes";
import { ColorEnum } from "../enums/ColorEnum";
import { AlignmentEnum } from "../enums/AlignmentEnum";

export interface ParagraphElement {
  type: ElementTypesEnum.PARAGRAPH;
  children: CustomText[];
  alignment: AlignmentEnum;
}

export interface SmallElement {
  type: ElementTypesEnum.SMALL;
  children: CustomText[];
  alignment: AlignmentEnum;
}

export interface HeadingOneElement {
  type: ElementTypesEnum.HEADING_TWO;
  children: CustomText[];
  alignment: AlignmentEnum;
}

export interface HeadingTwoElement {
  type: ElementTypesEnum.HEADING_ONE;
  children: CustomText[];
  alignment: AlignmentEnum;
}

export interface SubheadingElement {
  type: ElementTypesEnum.SUBHEADING;
  children: CustomText[];
  alignment: AlignmentEnum;
}

export interface LinkElement {
  type: ElementTypesEnum.LINK;
  children: CustomText[];
  href: string;
  alignment: AlignmentEnum;
}

export interface QuoteElement {
  type: ElementTypesEnum.QUOTES;
  children: CustomText[];
  alignment: AlignmentEnum;
}

export interface ListElement {
  type: ElementTypesEnum.LIST;
  children: CustomText[];
  alignment: AlignmentEnum;
}

export interface NumberedListElement {
  type: ElementTypesEnum.NUMBERED_LIST;
  children: CustomText[];
  alignment: AlignmentEnum;
}

export interface ListItemElement {
  type: ElementTypesEnum.LIST_ITEM;
  children: CustomText[];
  alignment: AlignmentEnum;
}

export interface ImageElement {
  type: ElementTypesEnum.IMAGE;
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
