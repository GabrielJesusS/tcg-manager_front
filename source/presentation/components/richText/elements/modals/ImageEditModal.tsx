import { Textinput } from "@/presentation/components/common/Textinput";
import { DefaultQuestionModal } from "@/presentation/components/common/modals/DefaultQuestionModal";
import { ELEMENT_TYPES_ENUM } from "@/presentation/enums/ElementTypes";
import { imageModalAtom } from "@/presentation/store/editor/imageModalAtom";
import { checkImageUrl } from "@/presentation/utils/checkImageUrl";
import { createImageElement } from "@/utils/richTextEditor/createImageElement";
import { createParagraphNode } from "@/utils/richTextEditor/createParagraphElement";
import { check } from "prettier";
import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Editor, Element, Transforms } from "slate";
import { ReactEditor, useSlate } from "slate-react";

export const ImageEditModal = (): JSX.Element => {
  const [open, setOpen] = useRecoilState(imageModalAtom);
  const [error, setError] = useState<string>("");

  const editor = useSlate();

  function getImageUrl(): string {
    if (!editor.selection) return "";

    const [parentNode] = Editor.parent(editor, editor.selection.focus.path);

    if (
      Element.isElement(parentNode) &&
      Element.isElementType(parentNode, ELEMENT_TYPES_ENUM.IMAGE)
    ) {
      return parentNode.type === ELEMENT_TYPES_ENUM.IMAGE ? parentNode.src : "";
    }
    return "";
  }

  const [src, setSrc] = useState(getImageUrl() ?? "");

  function insertImage(url: string): void {
    ReactEditor.focus(editor);

    const { selection } = editor;
    if (!!selection) {
      const [parentNode] = Editor.parent(editor, selection.focus.path);

      setError("");
      if (
        Element.isElement(parentNode) &&
        Element.isElementType(parentNode, ELEMENT_TYPES_ENUM.IMAGE)
      ) {
        Transforms.setNodes(editor, {
          src:url,
        });
        setOpen(false);
        return;
      }

      if (
        Element.isElement(parentNode) &&
        !Element.isElementType(parentNode, ELEMENT_TYPES_ENUM.IMAGE) &&
        Editor.hasTexts(editor, parentNode)
      ) {
        Transforms.insertNodes(editor, createImageElement(url));
        Transforms.insertNodes(editor, createParagraphNode());
        setOpen(false);
        return;
      }

      Transforms.setNodes(editor, createImageElement(url));
      Transforms.insertNodes(editor, createParagraphNode());
      setOpen(false);
      return;
    }
    Transforms.setNodes(editor, createImageElement(url));
    Transforms.insertNodes(editor, createParagraphNode());
    setOpen(false);
  }

  function handleImageInsert(): void {
    if (!src || !checkImageUrl(src)) {
      setError("Por favor, insira uma URL válida!");
      return;
    }

    insertImage(src)
  }

  function handleClose(): void {
    setError("");
    setOpen(false);
  }

  useEffect(() => {
    setSrc(getImageUrl());
  }, [open]);

  function uploadImage(e: ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;

    if (!fileList) return;

    Array.from(fileList).forEach((file) => {
      const reader = new FileReader();
      const [mime] = file.type.split("/");

      if (mime === "image") {
        reader.addEventListener("load", () => {
          const url = reader.result;
          insertImage(url as string);
        });

        reader.readAsDataURL(file);
      }
    });
  }

  return (
    <DefaultQuestionModal
      isOpen={open}
      close={handleClose}
      action={{
        actionClick: handleImageInsert,
        actionText: getImageUrl() ? "Alterar imagem" : "Inserir imagem",
      }}
      title={getImageUrl() ? "Alterar imagem" : "Inserir nova imagem"}
    >
      <div className="my-4">
        <Textinput
          type="url"
          inputProps={{
            onChange: (e) => {
              setSrc(e.target.value);
            },
            value: src,
            placeholder: "http://suaimagem.com",
          }}
          label="URL da imagem"
        />
        <span className="block">ou</span>
        <label className="">
          Envie uma imagem!
          <input type="file" onChange={uploadImage} />
        </label>
      </div>
      {error ? <span>{error}</span> : null}
    </DefaultQuestionModal>
  );
};
