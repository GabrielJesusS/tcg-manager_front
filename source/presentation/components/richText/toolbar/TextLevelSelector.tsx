import { Listbox } from "@headlessui/react";
import { useEffect, useState } from "react";
import ArrowIcon from "@/presentation/public/images/icons/chevron.svg";
import { Editor } from "slate";
import { ELEMENT_TYPES_ENUM } from "@/presentation/enums/ElementTypes";
import { useTextType } from "@/presentation/hooks/richTextEditor /useTextType";

const textTypes = [
  { label: "Small", value: ELEMENT_TYPES_ENUM.SMALL },
  { label: "Normal", value: ELEMENT_TYPES_ENUM.PARAGRAPH },
  { label: "Heading 1", value: ELEMENT_TYPES_ENUM.HEADING_ONE },
  { label: "Heading 2", value: ELEMENT_TYPES_ENUM.HEADING_TWO },
  { label: "SubHeading", value: ELEMENT_TYPES_ENUM.SUBHEADING },
];

interface ITextLevelSelector {
  editor: Editor;
}

export const TextLevelSelector = ({ editor }: ITextLevelSelector) => {
  const [statex, test] = useState<ELEMENT_TYPES_ENUM>(
    ELEMENT_TYPES_ENUM.PARAGRAPH
  );
  const { toggleText, checkWhatText } = useTextType(editor);

  useEffect(() => {
    toggleText(statex);
    console.log("dawdawd");
  }, [statex]);

  useEffect(() => {
    if (!editor.children) {
      return;
    }

    const type = checkWhatText();
    if (type !== statex) {
      test(type as ELEMENT_TYPES_ENUM);
    }
  }, [editor.children]);

  return (
    <div className="relative z-20 text-system-600 w-36">
      <Listbox
        defaultValue={ELEMENT_TYPES_ENUM.PARAGRAPH}
        value={statex}
        onChange={test}
      >
        <Listbox.Button className="flex items-center justify-between w-full">
          {textTypes.find((e) => e.value === statex)?.label}
          <ArrowIcon className="h-6 fill-system-400 rotate-90" />
        </Listbox.Button>
        <Listbox.Options className="absolute w-full top-full bg-system-100">
          {textTypes.map((item) => (
            <Listbox.Option
              className="hover:bg-secondary cursor-pointer p-2 hover:text-system"
              key={item.value}
              value={item.value}
            >
              {item.label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};