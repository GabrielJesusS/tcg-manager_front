import { Listbox } from "@headlessui/react";
import ArrowIcon from "@/presentation/public/images/icons/chevron.svg";
import { ELEMENT_TYPES_ENUM } from "@/presentation/enums/ElementTypes";
import { useTextType } from "@/presentation/hooks/richTextEditor/useTextType";
import { useSlateStatic } from "slate-react";

const textTypes = [
  { label: "Small", value: ELEMENT_TYPES_ENUM.SMALL },
  { label: "Normal", value: ELEMENT_TYPES_ENUM.PARAGRAPH },
  { label: "Heading 1", value: ELEMENT_TYPES_ENUM.HEADING_ONE },
  { label: "Heading 2", value: ELEMENT_TYPES_ENUM.HEADING_TWO },
  { label: "SubHeading", value: ELEMENT_TYPES_ENUM.SUBHEADING },
];

export const TextLevelSelector = ():JSX.Element => {

  const editor = useSlateStatic();

  const { toggleText, checkWhatText } = useTextType(editor);

  return (
    <div className="relative z-20 text-system-600 md:w-36">
      <Listbox
        defaultValue={ELEMENT_TYPES_ENUM.PARAGRAPH}
        value={checkWhatText}
        onChange={toggleText}
        disabled={!textTypes.find((e) => e.value === checkWhatText)?.label}
     >
        <Listbox.Button className="flex items-center justify-between w-full">
          {textTypes.find((e) => e.value === checkWhatText)?.label ?? "----------"}
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
