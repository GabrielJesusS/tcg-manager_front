import { CustomText } from "@/presentation/@types/slate";
import { invertClassMapping } from "./invertClassMapping";
import { COLOR_TEXT_MAP, ColorEnum } from "@/presentation/enums/ColorEnum";

const COLOR_CLASS_MAP = invertClassMapping(COLOR_TEXT_MAP);

export function returnElementMarks(el: Node): Partial<CustomText> {
  let nodeMarks: Partial<CustomText> = {};

  switch (el.nodeName) {
    case "STRONG":
      nodeMarks.isBold = true;

    case "EM":
      nodeMarks.isItalic = true;

    case "A":
      nodeMarks.isLink = true;
  }

  if (el instanceof HTMLElement) {
    Array.from(el.classList).forEach((e) => {
      if (COLOR_CLASS_MAP[e]) {
        nodeMarks.color = COLOR_CLASS_MAP[e] as ColorEnum;
      }

      if (e === "underline") {
        nodeMarks.isUnderline = true;
      }
    });
  }

  return nodeMarks;
}
