import { Editor } from "slate";

export function withLink(e: Editor): Editor {
  const { isInline } = e;
  e.isInline = (element) =>
    element.type === "link" ? true : isInline(element);
  return e;
}
