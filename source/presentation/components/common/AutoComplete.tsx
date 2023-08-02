import { Combobox } from "@headlessui/react";
import { ChangeEvent, useState } from "react";
interface IOption {
  id: string | number;
  text: string;
  value: string | number;
}

interface IAutoCompleteProps {
  placeholder: string;
  selectedOption?: string;
  setter: (e: string) => void;
  options: IOption[];
}

export const AutoCompleteBox = ({
  options,
  placeholder,
  selectedOption,
  setter,
}: IAutoCompleteProps): JSX.Element => {
  const [query, setQuery] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setQuery(e.target.value);
  }

  const filteredItems =
    options.filter((e) => e.text.toLowerCase().includes(query.toLowerCase())) ||
    options;

  return (
    <div className="relative">
      <Combobox value={selectedOption} onChange={setter}>
        <Combobox.Input
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full drop-shadow-md text-base text-system-800 font-medium bg-system px-3 py-1 transition-all hover:border-system-200 duration-150 border-system-600 focus:border-secondary outline-0 border-2 rounded-full"
        />

        <Combobox.Options className="py-1 drop-shadow-md block bg-system mt-2 max-h-60 overflow-y-auto absolute z-10 left-0 w-full">
          {filteredItems.length ? (
            filteredItems.map((opt) => (
              <Combobox.Option
                key={opt.id}
                value={opt.value}
                className="cursor-pointer px-8 py-2 hover:bg-secondary/25"
              >
                {opt.text}
              </Combobox.Option>
            ))
          ) : (
            <span className="cursor-pointer px-8 py-6 mx-auto block w-fit">
              Não foi encontrado nenhum item =(
            </span>
          )}
        </Combobox.Options>
      </Combobox>
    </div>
  );
};
