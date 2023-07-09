import { BaseEditor, Descendant } from "slate";
import { ReactEditor } from "slate-react";
import { ELEMENT_TYPES_ENUM } from "../enums/ElementTypes";
import { ColorEnum } from "../enums/ColorEnum";

export type ParagraphElement = {
  type: ELEMENT_TYPES_ENUM.PARAGRAPH;
  children: CustomText[];
};

export type SmallElement = {
  type: ELEMENT_TYPES_ENUM.SMALL;
  children: CustomText[];
};

export type HeadingOneElement = {
  type: ELEMENT_TYPES_ENUM.HEADING_TWO;
  children: CustomText[];
};

export type HeadingTwoElement = {
  type: ELEMENT_TYPES_ENUM.HEADING_ONE;
  children: CustomText[];
};

export type SubheadingElement = {
  type: ELEMENT_TYPES_ENUM.SUBHEADING;
  children: CustomText[];
};

export type LinkElement = {
  type: ELEMENT_TYPES_ENUM.LINK;
  children: CustomText[];
  href: string;
};

export type QuoteElement = {
  type: ELEMENT_TYPES_ENUM.QUOTES;
  children: CustomText[];
};

export type ListElement = {
  type: ELEMENT_TYPES_ENUM.LIST;
  children: CustomText[];
};

export type DividerElement = {
  type: ELEMENT_TYPES_ENUM.DIVIDER;
  children: CustomText[];
};
export type ImageElement = {
  type: ELEMENT_TYPES_ENUM.IMAGE;
  children: CustomText[];
};

type CustomElement =
  | ParagraphElement
  | SmallElement
  | HeadingTwoElement
  | HeadingTwoElement
  | SubheadingElement
  | QuoteElement
  | LinkElement
  | ListElement
  | DividerElement
  | ImageElement

type CustomText = {
  text: string;
  isBold?: boolean;
  isItalic?: boolean;
  isUnderline?: boolean;
  color: ColorEnum;
};

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
