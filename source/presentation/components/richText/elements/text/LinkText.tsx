import { useLink } from "@/presentation/hooks/richTextEditor /useLink";
import {
  linkModalAtom,
  linkURLAtom,
} from "@/presentation/store/editor/linkModalAtom";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { RenderElementProps, useSelected, useSlate } from "slate-react";
import WebIcon from "@/presentation/public/images/icons/web.svg";
import CloseIcon from "@/presentation/public/images/icons/close.svg";
import { usePopper } from "react-popper";

export const LinkText = ({
  attributes,
  children,
  element,
}: RenderElementProps) => {
  const editor = useSlate();
  const selected = useSelected();
  const { removeLink } = useLink(editor);
  const [referenceElement, setReferenceElement] = useState();
  const [popperElement, setPopperElement] = useState();
  const { styles, attributes: att } = usePopper(
    referenceElement,
    popperElement
  );

  return (
    <span className="relative">
      <Link
        href={""}
        {...attributes}
        ref={setReferenceElement}
        className="dft-link"
      >
        {children}
      </Link>
      {selected && (
        <span
          ref={setPopperElement}
          style={styles.popper}
          {...att.popper}
          contentEditable={false}
          className="z-10 rounded-lg p-2 flex max-w-fit space-x-2 absolute  shadow-lg bg-system top-full"
        >
          <span className="block">
            <WebIcon className="w-6 h-6 text-system-200" />
          </span>
          <span className="dft-link whitespace-nowrap">{element.href}</span>
          <span className="block min-h-full w-0.5 bg-system-200" />
          <button title="Remover link" onClick={removeLink}>
            <CloseIcon className="w-6 h-6 fill-error" />
          </button>
        </span>
      )}
    </span>
  );
};