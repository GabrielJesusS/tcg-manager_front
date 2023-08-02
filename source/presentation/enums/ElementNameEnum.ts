import { jsx } from "slate-hyperscript";
import { NodeTypeEnum } from "./NodeTypeEnum";
import { ElementTypesEnum } from "./ElementTypes";
import { returnElementAttributes } from "../utils/editor/returnElementAttributes";
import { CustomElement, CustomText } from "../@types/slate";
import { Descendant } from "slate";

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
  H2 = "H2",
  H3 = "H3",
  H4 = "H4",
  SMALL = "SMALL",
}


export const BLOCK_ELEMENTS:Record<string, (children?: CustomText[],el?: Node) => CustomElement | Descendant[]> = {
    [ElementNameEnum.BODY]: (children: CustomText[]) => jsx(NodeTypeEnum.FRAGMENT, {}, children),
    [ElementNameEnum.DIV]: (children: CustomText[], el:Node) => jsx(NodeTypeEnum.FRAGMENT, { ...returnElementAttributes(el)}, children),
    [ElementNameEnum.IMG]: (children: CustomText[], el: Node) => jsx(NodeTypeEnum.ELEMENT, {type: ElementTypesEnum.IMAGE, ...returnElementAttributes(el)}, children),
    [ElementNameEnum.P]: (children: CustomText[], el: Node) => jsx(NodeTypeEnum.ELEMENT, {type: ElementTypesEnum.PARAGRAPH, ...returnElementAttributes(el)}, children),
    [ElementNameEnum.H2]: (children: CustomText[], el: Node) => jsx(NodeTypeEnum.ELEMENT, {type: ElementTypesEnum.HEADING_ONE, ...returnElementAttributes(el)}, children),
    [ElementNameEnum.H3]: (children: CustomText[], el: Node) => jsx(NodeTypeEnum.ELEMENT, {type: ElementTypesEnum.HEADING_TWO, ...returnElementAttributes(el)}, children),
    [ElementNameEnum.H4]: (children: CustomText[], el: Node) => jsx(NodeTypeEnum.ELEMENT, {type: ElementTypesEnum.SUBHEADING, ...returnElementAttributes(el)}, children),
    [ElementNameEnum.SMALL]: (children: CustomText[], el: Node) => jsx(NodeTypeEnum.ELEMENT, {type: ElementTypesEnum.SMALL, ...returnElementAttributes(el)}, children),
    [ElementNameEnum.A]: (children: CustomText[], el: Node) => jsx(NodeTypeEnum.ELEMENT, {type: ElementTypesEnum.LINK, ...returnElementAttributes(el)}, children),
    [ElementNameEnum.OL]: (children: CustomText[], el: Node) => jsx(NodeTypeEnum.ELEMENT, {type: ElementTypesEnum.LIST, ...returnElementAttributes(el)}, children),
    [ElementNameEnum.UL]: (children: CustomText[], el: Node) => jsx(NodeTypeEnum.ELEMENT, {type: ElementTypesEnum.NUMBERED_LIST, ...returnElementAttributes(el)}, children),
    [ElementNameEnum.LI]: (children: CustomText[], el: Node) => jsx(NodeTypeEnum.ELEMENT, {type: ElementTypesEnum.LIST_ITEM,...returnElementAttributes(el)}, children),
    [ElementNameEnum.CITE]: (children: CustomText[], el: Node) => jsx(NodeTypeEnum.ELEMENT, {type: ElementTypesEnum.QUOTES, ...returnElementAttributes(el)}, children),
}
