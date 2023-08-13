import { Listbox } from "@headlessui/react";
import ArrowIcon from "@/presentation/public/images/icons/chevron.svg";

interface IOption {
  id: string | number;
  text: string;
  value: string | number;
}

interface IDropdown {
  placeholder: string;
  label?: string;
  selectedOption?: string;
  setter: (e: string) => void;
  options: IOption[];
}

export const Dropdown = ({
  placeholder,
  options,
  label,
  selectedOption,
  setter,
}: IDropdown): JSX.Element => {
  return (
    <div className="relative">
      <Listbox value={selectedOption} onChange={setter}>
        <Listbox.Label className="font-semibold block">{label}</Listbox.Label>
        <Listbox.Button
          className={
            "text-center flex items-center justify-between w-full text-base border-2 font-medium disabled:bg-system-200 hover:disabled:bg-system-200 disabled:border-system-200 px-4 py-1 rounded-lg drop-shadow-md text-system bg-secondary border-secondary"
          }
        >
          {selectedOption
            ? options.find((i) => i.value === selectedOption)?.text
            : placeholder}
          <ArrowIcon className="w-6 h-6 fill-system rotate-90" />
        </Listbox.Button>
        <Listbox.Options className="py-1 drop-shadow-md block bg-system mt-2 max-h-60 overflow-y-auto absolute z-10 left-0 w-full">
          {options.map((opt) => (
            <Listbox.Option
              key={opt.id}
              value={opt.value}
              className="cursor-pointer px-8 py-2 hover:bg-secondary/25"
            >
              {opt.text}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};
