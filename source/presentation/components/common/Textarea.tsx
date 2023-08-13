import classNames from "classnames";
import { HTMLAttributes, InputHTMLAttributes } from "react";

interface ITextAreaProps extends HTMLAttributes<HTMLLabelElement> {
  label: string;
  inputProps?: InputHTMLAttributes<HTMLTextAreaElement> & {
    ref?: React.Ref<HTMLTextAreaElement>;
  };
}

export const Textarea = ({
  label,
  placeholder,
  inputProps,
  className,
}: ITextAreaProps): JSX.Element => {
  return (
    <label className="block">
      <span className="block font-semibold text-lg">{label}</span>
      <textarea
        placeholder={placeholder}
        className={classNames(
          "w-full h-auto drop-shadow-md bg-system px-3 py-1 transition-all hover:border-system-200 duration-150 border-system-600 focus:border-secondary outline-0 border-2 rounded-lg",
          className
        )}
        {...inputProps}
      />
    </label>
  );
};
