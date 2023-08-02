import { ElementTypesEnum } from "@/presentation/enums/ElementTypes";
import { checkImageUrl } from "@/presentation/utils/checkImageUrl";
import { uploadImages } from "@/presentation/utils/uploadImages";
import { createImageElement } from "@/utils/richTextEditor/createImageElement";
import { Editor, Transforms } from "slate";

function insertImage(editor: Editor, url: string): void {
  Transforms.insertNodes(editor, createImageElement(url));
}

export function withImage(e: Editor): Editor {
  const { isVoid, insertData } = e;
  e.isVoid = (element) =>
    element.type === ElementTypesEnum.IMAGE ? true : isVoid(element);

  e.insertData = (data) => {
    const text = data.getData("text/plain");
    const { files } = data;

    if (checkImageUrl(text)) {
      insertImage(e, text);
      e.insertBreak();
      return;
    }

    if (files && files.length > 0) {
      uploadImages(files, (url) => insertImage(e, url));
      e.insertBreak();
      return;
    }

    insertData(data);
    e.insertBreak();
  };

  return e;
}
