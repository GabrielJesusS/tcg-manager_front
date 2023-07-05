import { BaseEditor, Descendant } from "slate";
import { ReactEditor } from "slate-react";
import { ELEMENT_TYPES_ENUM } from "../enums/ElementTypes";

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

type CustomElement =
  | ParagraphElement
  | SmallElement
  | HeadingTwoElement
  | HeadingTwoElement
  | SubheadingElement
  | LinkElement;

type CustomText = { text: string; isBold?: boolean};

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
