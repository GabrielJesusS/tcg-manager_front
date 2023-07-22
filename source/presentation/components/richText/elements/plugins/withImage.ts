import { ELEMENT_TYPES_ENUM } from "@/presentation/enums/ElementTypes";
import { checkImageUrl } from "@/presentation/utils/checkImageUrl";
import { createImageElement } from "@/utils/richTextEditor/createImageElement";
import { Editor, Transforms } from "slate";

function insertImage(editor: Editor, url: string): void {
  Transforms.insertNodes(editor, createImageElement(url));
}

export function withImage(e: Editor): Editor {
  const { isVoid, insertData} = e;
  e.isVoid = (element) =>
    element.type === ELEMENT_TYPES_ENUM.IMAGE ? true : isVoid(element);

  e.insertData = (data) => {
    const text = data.getData("text/plain");
    const { files } = data;

    if (checkImageUrl(text)) {
      insertImage(e, text);
      e.insertBreak();
      return;
    }

    if (files && files.length > 0) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        const [mime] = file.type.split("/");

        if (mime === "image") {
          reader.addEventListener("load", () => {
            const url = reader.result;
            insertImage(e, url as string);
          });

          reader.readAsDataURL(file);
        }
      });
      e.insertBreak();
      return;
    }

    insertData(data);
    e.insertBreak();
  };

  return e;
}
