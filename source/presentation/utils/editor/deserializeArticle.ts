import { CustomElement, CustomText } from "@/presentation/@types/slate";
import { BLOCK_ELEMENTS } from "@/presentation/enums/ElementNameEnum";
import { jsx } from "slate-hyperscript";
import { returnElementMarks } from "./returnElementMarks";

type TDeserializationReturn =
  | Partial<CustomElement>
  | Partial<CustomText>
  | null
  | TDeserializationReturn[];

function deserialize(
  el: Node,
  markAttributes = {} as Partial<CustomText>
): TDeserializationReturn {
  if (el.nodeType === Node.TEXT_NODE) {
    return jsx("text", markAttributes, el.textContent);
  } else if (el.nodeType !== Node.ELEMENT_NODE) return null;

  let elmMarkAttributes = { ...markAttributes, ...returnElementMarks(el) };

  const children = Array.from(el.childNodes)
    .map((node) => deserialize(node, elmMarkAttributes))
    .flat();

  if (children.length === 0) {
    children.push(jsx("text", elmMarkAttributes, ""));
  }

  if (BLOCK_ELEMENTS[el.nodeName]) {
    return BLOCK_ELEMENTS[el.nodeName](children as CustomText[], el);
  }

  return children;
}

export function deserializeArticle(article: string): CustomElement[] {
  const document = new DOMParser().parseFromString(article, "text/html");
  return deserialize(document.body) as CustomElement[];
}
