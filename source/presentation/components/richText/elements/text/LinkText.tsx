import { useLink } from "@/presentation/hooks/richTextEditor/useLink";
import Link from "next/link";
import { useState } from "react";
import { RenderElementProps, useSelected, useSlate } from "slate-react";
import WebIcon from "@/presentation/public/images/icons/web.svg";
import CloseIcon from "@/presentation/public/images/icons/close.svg";
import { usePopper } from "react-popper";
import { ElementTypesEnum } from "@/presentation/enums/ElementTypes";

export const LinkText = ({
  attributes,
  children,
  element,
}: RenderElementProps): JSX.Element | null => {
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

  return element.type === ElementTypesEnum.LINK ? (
    <span className="relative">
      <Link
        href={""}
        {...attributes}
        ref={(e) => {
          setReferenceElement(e ?? undefined);
        }}
        className="dft-link"
        title={`link to ${element.href}`}
      >
        {children}
      </Link>
      {selected && (
        <span
          ref={(e) => {
            setPopperElement(e ?? undefined);
          }}
          style={styles.popper}
          {...att.popper}
          contentEditable={false}
          className="z-10 rounded-lg p-2 flex max-w-fit space-x-2 absolute  shadow-lg bg-system top-full"
        >
          <span className="block">
            <WebIcon className="w-6 h-6 text-system-200" />
          </span>
          <Link
            href={element.href}
            target="_blank"
            className="dft-link whitespace-nowrap"
          >
            {element.href}
          </Link>
          <span className="block min-h-full w-0.5 bg-system-200" />
          <button title="Remover link" onClick={removeLink}>
            <CloseIcon className="w-6 h-6 fill-error" />
          </button>
        </span>
      )}
    </span>
  ) : null;
};
