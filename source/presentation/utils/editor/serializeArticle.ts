import { COLOR_TEXT_MAP } from "@/presentation/enums/ColorEnum";
import {
  ELEMENT_BLOCKS,
} from "@/presentation/enums/ElementTypes";
import { Descendant, Text } from "slate";

export function serialize(node: Descendant): string {
  if (Text.isText(node)) {
    let strings = node.text;

    if (node.isItalic) {
      strings = `<em>${strings}</em>`;
    }

    if (node.isBold) {
      strings = `<strong>${strings}</strong>`;
    }

    if (node.color && !node.isLink) {
      strings = `<span class="${COLOR_TEXT_MAP[node.color]}">${strings}</span>`;
    }

    if (node.isUnderline) {
      strings = `<span class="underline">${strings}</span>`;
    }

    return strings;
  }

  const children = node.children.map((n) => serialize(n)).join("");

  if (ELEMENT_BLOCKS[node.type]) {
    return ELEMENT_BLOCKS[node.type](node, children);
  }

  return children;
}
