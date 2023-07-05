import { BaseEditor, Descendant } from 'slate'
import { ReactEditor } from 'slate-react'
import { ELEMENT_TYPES_ENUM } from '../enums/ElementTypes';



type CustomElement = { type: ELEMENT_TYPES_ENUM; href?:string ; children: CustomText[] }
type CustomText = { text: string , isBold?: boolean, isLink?: boolean}

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}