import classNames from "classnames";
import type { HTMLAttributes, InputHTMLAttributes } from "react";

interface TextinputProps extends HTMLAttributes<HTMLLabelElement> {
  label?: string;
  type: "text" | "tel" | "password" | "email" | "textarea" | "date" | "url";
  inputProps?: InputHTMLAttributes<HTMLInputElement> & {
    ref?: React.Ref<HTMLInputElement>;
  };
}

export const Textinput = ({
  label,
  type,
  placeholder,
  inputProps,
  className,
}: TextinputProps): JSX.Element => {
  return (
    <label className="block">
      <span className="block text-base">{label}</span>
      <input
        placeholder={placeholder}
        className={classNames(
          "w-full drop-shadow-md text-base text-system-800 font-medium bg-system px-3 py-1 transition-all hover:border-system-200 duration-150 border-system-200 focus:border-secondary outline-0 border-2 rounded-full",
          className
        )}
        {...inputProps}
        type={type}
      />
    </label>
  );
};
