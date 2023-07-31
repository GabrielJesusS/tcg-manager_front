import { jsx } from "slate-hyperscript";
import { NodeTypeEnum } from "./NodeTypeEnum";
import { ELEMENT_TYPES_ENUM } from "./ElementTypes";
import { returnElementAttributes } from "../utils/editor/returnElementAttributes";

export enum ElementNameEnum {
  P = "P",
  BODY = "BODY",
  A = "A",
  SPAN = "SPAN",
  LI = "LI",
  OL = "OL",
  UL = "UL",
  CITE = "CITE",
  BLOCKQUOTE = "BLOCKQUOTE",
  DIV = "DIV",
  IMG = "IMG",
}


export const BLOCK_ELEMENTS = {
    [ElementNameEnum.BODY]: (children: any) => jsx(NodeTypeEnum.FRAGMENT, {}, children),
    [ElementNameEnum.DIV]: (children: any, el:Node) => jsx(NodeTypeEnum.FRAGMENT, { ...returnElementAttributes(el)}, children),
    [ElementNameEnum.IMG]: (children: any, el: Node) => jsx(NodeTypeEnum.ELEMENT, {type: ELEMENT_TYPES_ENUM.IMAGE, ...returnElementAttributes(el)}, children),
    [ElementNameEnum.P]: (children: any, el: Node) => jsx(NodeTypeEnum.ELEMENT, {type: ELEMENT_TYPES_ENUM.PARAGRAPH, ...returnElementAttributes(el)}, children),
    [ElementNameEnum.A]: (children: any, el: Node) => jsx(NodeTypeEnum.ELEMENT, {type: ELEMENT_TYPES_ENUM.LINK, ...returnElementAttributes(el)}, children),
    [ElementNameEnum.OL]: (children: any, el: Node) => jsx(NodeTypeEnum.ELEMENT, {type: ELEMENT_TYPES_ENUM.LIST, ...returnElementAttributes(el)}, children),
    [ElementNameEnum.UL]: (children: any, el: Node) => jsx(NodeTypeEnum.ELEMENT, {type: ELEMENT_TYPES_ENUM.NUMBERED_LIST, ...returnElementAttributes(el)}, children),
    [ElementNameEnum.LI]: (children: any, el: Node) => jsx(NodeTypeEnum.ELEMENT, {type: ELEMENT_TYPES_ENUM.LIST_ITEM,...returnElementAttributes(el)}, children),
    [ElementNameEnum.CITE]: (children: any, el: Node) => jsx(NodeTypeEnum.ELEMENT, {type: ELEMENT_TYPES_ENUM.QUOTES, ...returnElementAttributes(el)}, children),
}
