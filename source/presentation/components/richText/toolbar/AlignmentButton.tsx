import { useEffect, useMemo, useState } from "react";
import { ButtonBase } from "./ButtonBase";
import { AlignmentEnum } from "@/presentation/enums/AlignmentEnum";
import { useFocused, useSlateStatic } from "slate-react";
import { Editor, Element, Transforms } from "slate";
import AlignRight from "@/presentation/public/images/icons/editor/align-right.svg";
import AlignLeft from "@/presentation/public/images/icons/editor/align-left.svg";
import AlignCenter from "@/presentation/public/images/icons/editor/align-center.svg";
import AlignJustify from "@/presentation/public/images/icons/editor/align-justify.svg";
import { CustomElement } from "@/presentation/@types/slate";

const ALIGNMENT_LABELS_MAP = {
  [AlignmentEnum.CENTER]: <AlignCenter className="w-6 h-6" />,
  [AlignmentEnum.JUSTIFY]: <AlignJustify className="w-6 h-6" />,
  [AlignmentEnum.LEFT]: <AlignLeft className="w-6 h-6" />,
  [AlignmentEnum.RIGHT]: <AlignRight className="w-6 h-6" />,
};

export const AlignmentButton = (): JSX.Element => {
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const editor = useSlateStatic();
  const editorFocus = useFocused();

  function toggleOptions(): void {
    setOpenOptions((e) => !e);
  }

  function toggleAlignment(newAlignment: AlignmentEnum): void {
    Transforms.setNodes(editor, { alignment: newAlignment });

    setOpenOptions(false);
  }

  const actualAlignment = useMemo(() => {
    const { selection } = editor;

    if (!selection) return AlignmentEnum.LEFT;

    const [match] = Array.from(
      Editor.nodes<CustomElement>(editor, {
        at: Editor.unhangRange(editor, selection),
        match: (n) => !Editor.isEditor(n) && Element.isElement(n),
      })
    );

    if (match) {
      const node: CustomElement = match[0];
      return node.alignment;
    }

    return AlignmentEnum.LEFT;
  }, [editor.selection?.anchor, openOptions]);

  useEffect(() => {
    if (editorFocus && openOptions) {
      setOpenOptions(false);
    }
  }, [editorFocus]);

  return (
    <span className="relative">
      <ButtonBase onClick={toggleOptions}>
        {ALIGNMENT_LABELS_MAP[actualAlignment]}
      </ButtonBase>
      {openOptions ? (
        <span className="flex absolute z-20 top-full translate-y-2 right-0 bg-system-100 px-4 py-2 space-x-4 drop-shadow-md rounded-lg">
          {Object.values(AlignmentEnum).map((item) => (
            <ButtonBase
              key={item}
              onClick={() => {
                toggleAlignment(item);
              }}
              active={actualAlignment === item}
            >
              {ALIGNMENT_LABELS_MAP[item]}
            </ButtonBase>
          ))}
        </span>
      ) : null}
    </span>
  );
};
