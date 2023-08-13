import { ImageUploader } from "@/presentation/components/common/ImageUploader";
import { Textinput } from "@/presentation/components/common/Textinput";
import { DefaultQuestionModal } from "@/presentation/components/common/modals/DefaultQuestionModal";
import { ElementTypesEnum } from "@/presentation/enums/ElementTypes";
import { useLockBody } from "@/presentation/hooks/useLockBody";
import { imageModalAtom } from "@/presentation/store/editor/imageModalAtom";
import { checkImageUrl } from "@/presentation/utils/checkImageUrl";
import { isBaseDataImage } from "@/presentation/utils/isBaseDataImage";
import { createImageElement } from "@/utils/richTextEditor/createImageElement";
import { createParagraphNode } from "@/utils/richTextEditor/createParagraphElement";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Editor, Element, Transforms } from "slate";
import { ReactEditor, useSlate } from "slate-react";
import ImagePreview from "@/presentation/public/images/rsc/imagePreview.png";
import { uploadImages } from "@/presentation/utils/uploadImages";
import { generateRandomId } from "@/utils/generateRandomId";

export const ImageEditModal = (): JSX.Element => {
  const [open, setOpen] = useRecoilState(imageModalAtom);
  const [_, unlock] = useLockBody();
  const [error, setError] = useState<string>("");

  const editor = useSlate();

  function getImageUrl(): string {
    if (!editor.selection) return "";

    const [parentNode] = Editor.parent(editor, editor.selection.focus.path);

    if (!Element.isElement(parentNode)) {
      return "";
    }

    if (!(parentNode.type === ElementTypesEnum.IMAGE)) return "";

    return parentNode.src;
  }

  const [src, setSrc] = useState(
    isBaseDataImage(getImageUrl()) ? getImageUrl() : "" ?? ""
  );

  function insertImage(url: string, name: string): void {
    ReactEditor.focus(editor);

    const { selection } = editor;
    if (selection) {
      const [parentNode] = Editor.parent(editor, selection.focus.path);

      setError("");
      if (
        Element.isElement(parentNode) &&
        Element.isElementType(parentNode, ElementTypesEnum.IMAGE)
      ) {
        Transforms.setNodes(editor, {
          src: url,
        });
        handleClose();
        return;
      }

      if (
        Element.isElement(parentNode) &&
        !Element.isElementType(parentNode, ElementTypesEnum.IMAGE) &&
        Editor.hasTexts(editor, parentNode)
      ) {
        Transforms.insertNodes(editor, createImageElement(url, name));
        Transforms.insertNodes(editor, createParagraphNode());
        handleClose();
        return;
      }

      Transforms.setNodes(editor, createImageElement(url, name));
      Transforms.insertNodes(editor, createParagraphNode());
      handleClose();
      return;
    }
    Transforms.setNodes(editor, createImageElement(url, name));
    Transforms.insertNodes(editor, createParagraphNode());
    handleClose();
  }

  function handleImageInsert(): void {
    if (!src || !checkImageUrl(src)) {
      setError("Por favor, insira uma URL válida!");
      return;
    }

    insertImage(src, generateRandomId());
  }

  function handleClose(): void {
    setError("");
    unlock();
    setOpen(false);
  }

  useEffect(() => {
    const tagUrl = getImageUrl();

    if (!isBaseDataImage(tagUrl)) {
      setSrc(tagUrl);
      return;
    }

    setSrc("");
  }, [open]);

  function uploadImage(fileList: File[] | FileList): void {
    uploadImages(fileList, insertImage);
  }

  function isValidImage(image: string): boolean {
    return isBaseDataImage(image) || checkImageUrl(image);
  }

  return (
    <DefaultQuestionModal
      isOpen={open}
      close={handleClose}
      title={getImageUrl() ? "Alterar imagem" : "Inserir nova imagem"}
    >
      <div className="flex space-y-4 md:space-x-4 md:space-y-0 my-4 md:flex-row flex-col">
        <div className="bg-system-200 grow relative w-full">
          {isBaseDataImage(src || getImageUrl()) ? (
            <span className="absolute select-none cursor-help drop-shadow-lg group text-xs sm:text-sm font-bold text-system bg-warning p-2 rounded-lg inset-2 w-fit h-fit">
              Arquivo de imagem!
              <span className="absolute -translate-y-0 group-hover:-translate-y-2 group-hover:opacity-100 opacity-0 transition-all duration-150  w-60 -translate-x-1/2 text-center bg-system-800/80 p-2 rounded-lg drop-shadow-lg left-1/2  m-auto bottom-full select-none">
                Imagem em formato de arquivo, URL não pode ser editada para
                evitar inconsistencias
              </span>
            </span>
          ) : null}
          <img
            src={
              isValidImage(src || getImageUrl())
                ? src || getImageUrl()
                : ImagePreview.src
            }
            className="aspect-video object-contain w-full h-full shrink-0"
            loading="lazy"
          />
        </div>
        <span className="min-h-full w-0.5 block bg-gradient-to-b from-transparent via-system-200 to-transparent" />
        <div className="space-y-4 shrink-0 flex flex-col grow md:max-w-fit justify-between">
          <div className="space-y-4">
            <ImageUploader
              onChange={uploadImage}
              label="Faça upload de uma imagem"
            />
            <Textinput
              type="url"
              inputProps={{
                onChange: (e) => {
                  setSrc(e.target.value);
                },
                value: src,
                placeholder: "http://suaimagem.com",
              }}
              label="URL da imagem:"
            />
            {error ? <small className="text-error">*{error}</small> : null}
          </div>
          <button
            onClick={handleImageInsert}
            className="btn btn-primary w-full self-end block"
          >
            {getImageUrl() ? "Alterar imagem" : "Inserir imagem"}
          </button>
        </div>
      </div>
    </DefaultQuestionModal>
  );
};
