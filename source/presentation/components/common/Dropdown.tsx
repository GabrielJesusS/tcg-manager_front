import { InputHTMLAttributes, SelectHTMLAttributes } from "react";

interface IDropdown {
  selectPlaceholder: string;
  label: string;
  inputProps?: SelectHTMLAttributes<HTMLSelectElement> & {
    ref?: React.Ref<HTMLSelectElement>;
  };
  options: {
    text: string;
    value: string | number;
  }[];
}

export const Dropdown = ({
  selectPlaceholder,
  options,
  label,
  inputProps,
}: IDropdown) => {
  return (
    <label className="block">
      <span className="block font-semibold text-lg">{label}</span>
      <select
        {...inputProps}
        defaultValue={"0"}
        className="w-full text-base md:text-lg text-system px-2 py-1 transition-all cursor-pointer duration-150 hover:bg-secondary-light  bg-secondary outline-none rounded"
      >
        <option
          disabled
          hidden
          className="bg-system text-system-800 hover:text-system active:bg-secondary-dark"
          value="0"
        >
          {selectPlaceholder}
        </option>
        {options.map((opt) => (
          <option
            key={opt.value}
            className="bg-system text-system-800 hover:text-system active:bg-secondary-dark"
            value={opt.value}
          >
            {opt.text}
          </option>
        ))}
      </select>
    </label>
  );
};
