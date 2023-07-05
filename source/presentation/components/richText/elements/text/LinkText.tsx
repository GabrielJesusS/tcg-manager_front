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
import { ELEMENT_TYPES_ENUM } from "@/presentation/enums/ElementTypes";

export const LinkText = ({
  attributes,
  children,
  element,
}: RenderElementProps) => {
  const editor = useSlate();
  const selected = useSelected();
  const { removeLink } = useLink(editor);
  const [referenceElement, setReferenceElement] = useState<HTMLAnchorElement>();
  const [popperElement, setPopperElement] = useState<HTMLSpanElement>();
  const { styles, attributes: att } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: "auto-start",
    }
  );

  return element.type === ELEMENT_TYPES_ENUM.LINK ? (
    <span className="relative">
      <Link
        href={""}
        {...attributes}
        ref={(e) => setReferenceElement(e ?? undefined)}
        className="dft-link"
        title={`link to ${element.href}`}
      >
        {children}
      </Link>
      {selected && (
        <span
          ref={(e) => setPopperElement(e ?? undefined)}
          style={styles.popper}
          {...att.popper}
          contentEditable={false}
          className="z-10 rounded-lg p-2 flex max-w-fit space-x-2 absolute  shadow-lg bg-system top-full"
        >
          <span className="block">
            <WebIcon className="w-6 h-6 text-system-200" />
          </span>
          <Link href={element.href} target="_blank" className="dft-link whitespace-nowrap">{element.href}</Link>
          <span className="block min-h-full w-0.5 bg-system-200" />
          <button title="Remover link" onClick={removeLink}>
            <CloseIcon className="w-6 h-6 fill-error" />
          </button>
        </span>
      )}
    </span>
  ) : null;
};
