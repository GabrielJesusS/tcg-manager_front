import classNames from "classnames";
import { useState } from "react";
import { usePopper } from "react-popper";
import { Editor, Element, Node, Transforms } from "slate";
import { ReactEditor, RenderElementProps, useSelected, useSlate } from "slate-react";
import { ELEMENT_TYPES_ENUM } from "@/presentation/enums/ElementTypes";
import { AspectRatioEnum } from "@/presentation/enums/AspectRatioEnum";
import { CustomElement } from "@/presentation/@types/slate";
import { AspectRatioSelector } from "./AspectRatioSelector";
import { ImageSizeEnum } from "@/presentation/enums/ImageSizeEnum";
import { ImageSizeSelector } from "./ImageSizeSelector";
import { BehaviorSelector } from "./BehaviorSelector";
import { ImageBehaviorEnum } from "@/presentation/enums/ImageBehaviorEnum";
import { useSetRecoilState } from "recoil";
import { imageModalAtom } from "@/presentation/store/editor/imageModalAtom";
import { createParagraphNode } from "@/utils/richTextEditor/createParagraphElement";

const ASPECT_RATIO_MAP = {
  [AspectRatioEnum.WIDE]: "aspect-video",
  [AspectRatioEnum.SQUARE]: "aspect-square",
  [AspectRatioEnum.TV]: "aspect-tv",
  [AspectRatioEnum.CARD]: "aspect-card",
};

const SIZE_MAP = {
  [ImageSizeEnum.FULL]: "w-full",
  [ImageSizeEnum.SEVENTY_FIVE]: "w-3/4",
  [ImageSizeEnum.HALF]: "w-1/2",
  [ImageSizeEnum.TWENTY_FIVE]: "w-1/4",
};

const BEHAVIOR_MAP = {
  [ImageBehaviorEnum.FIT]: "object-contain",
  [ImageBehaviorEnum.FILL]: "object-fill",
  [ImageBehaviorEnum.COVER]: "object-cover",
  [ImageBehaviorEnum.AUTO]: "object-none",
};

function getImageAspectRatio(element: CustomElement): AspectRatioEnum {
  return element.type === ELEMENT_TYPES_ENUM.IMAGE
    ? (element.aspectRatio as AspectRatioEnum)
    : AspectRatioEnum.WIDE;
}

function getImageSize(element: CustomElement): ImageSizeEnum {
  return element.type === ELEMENT_TYPES_ENUM.IMAGE
    ? (element.size as ImageSizeEnum)
    : ImageSizeEnum.FULL;
}

function getImageBehavior(element: CustomElement): ImageBehaviorEnum {
  return element.type === ELEMENT_TYPES_ENUM.IMAGE
    ? (element.behavior as ImageBehaviorEnum)
    : ImageBehaviorEnum.AUTO;
}

export const ImageElm = (props: RenderElementProps) => {
  const selected = useSelected();
  const editor = useSlate();
  const setOpen = useSetRecoilState(imageModalAtom);
  const [isDraging, setDrag] = useState(false)
  const { element } = props;
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement>();
  const [popperElement, setPopperElement] = useState<HTMLSpanElement>();
  const { styles, attributes: att } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: "bottom-start",
      strategy: "fixed",
    }
  );

  function selectAspectRatio(newAspectRatio: AspectRatioEnum): void {
    const { selection } = editor;

    if (!!selection) {
      const [parentNode] = Editor.parent(editor, selection);

      if (
        Element.isElement(parentNode) &&
        Element.isElementType(parentNode, ELEMENT_TYPES_ENUM.IMAGE)
      ) {
        Transforms.setNodes(editor, {
          aspectRatio: newAspectRatio,
        });
      }
    }
  }

  function selectBehavior(newBehavior: ImageBehaviorEnum): void {
    const { selection } = editor;

    if (!!selection) {
      const [parentNode] = Editor.parent(editor, selection);

      if (
        Element.isElement(parentNode) &&
        Element.isElementType(parentNode, ELEMENT_TYPES_ENUM.IMAGE)
      ) {
        Transforms.setNodes(editor, {
          behavior: newBehavior,
        });
      }
    }
  }

  function selectSize(newSize: ImageSizeEnum): void {
    const { selection } = editor;

    if (!!selection) {
      const [parentNode] = Editor.parent(editor, selection);

      if (
        Element.isElement(parentNode) &&
        Element.isElementType(parentNode, ELEMENT_TYPES_ENUM.IMAGE)
      ) {
        Transforms.setNodes(editor, {
          size: newSize,
        });
      }
    }
  }

  function removeImage() {
    const { selection } = editor;

    if (!selection) {
      return;
    }

    if (Editor.previous(editor, { at: selection })) {
      Transforms.removeNodes(editor, { at: selection });
      return;
    }

    Transforms.setNodes(editor, createParagraphNode(), { at: selection });

    ReactEditor.focus(editor)
  }

  function handleDrag():void{
    setDrag((e)=> !e)
  }

  return (
    <div {...props.attributes} contentEditable={false} className={classNames()} onDragStart={handleDrag} onDragEnd={handleDrag}>
      {props.children} 

      <img
        className={classNames(
          "mx-auto cursor-pointer transition-all duration-150",
          {
            "outline outline-4 outline-secondary outline-offset-4": selected,
          },
          ASPECT_RATIO_MAP[getImageAspectRatio(element)],
          SIZE_MAP[getImageSize(element)],
          BEHAVIOR_MAP[getImageBehavior(element)]
        )}
        src={element.type === ELEMENT_TYPES_ENUM.IMAGE ? element.src : ""}
        alt=""
        ref={(e) => setReferenceElement(e ?? undefined)}
      />
      {selected && !isDraging && (
        <span
          ref={(e) => setPopperElement(e ?? undefined)}
          style={styles.popper}
          {...att.popper}
          contentEditable={false}
          className="z-20 rounded-lg p-2 max-w-fit space-y-2 absolute  shadow-lg bg-system top-full"
        >
          <span className="block space-y-2">
            Proporção da imagem
            <hr />
            <AspectRatioSelector
              onChange={selectAspectRatio}
              value={getImageAspectRatio(element)}
            />
          </span>
          <span className=" block space-y-2">
            Tamanho da imagem
            <hr />
            <ImageSizeSelector
              onChange={selectSize}
              value={getImageSize(element)}
            />
          </span>
          <span className=" block space-y-2">
            Comportamento da imagem
            <hr />
            <BehaviorSelector
              onChange={selectBehavior}
              value={getImageBehavior(element)}
            />
          </span>
          <hr />
          <span className="flex space-x-4">
            <button className="btn btn-primary " onClick={() => setOpen(true)}>
              Trocar imagem
            </button>
            <button className="btn btn-error " onClick={removeImage}>
              Excluir
            </button>
          </span>
        </span>
      )}
    </div>
  );
};
