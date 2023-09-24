import classNames from "classnames";
import { forwardRef, Ref, type InputHTMLAttributes, HTMLInputTypeAttribute } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type: HTMLInputTypeAttribute
  error?: string
}

 const TextInputComponent = ({
  label,
  type,
  placeholder,
  className,
  error,
  ...props
}: TextInputProps, ref: Ref<HTMLInputElement>): JSX.Element => {
  return (
    <label className="block relative">
      <span className="block text-base">{label}</span>
      <input
        placeholder={placeholder}
        className={classNames(
          "w-full disabled:bg-system-100 disabled:text-system-400 drop-shadow-md text-base text-system-800 font-medium bg-system px-3 py-1 transition-all hover:border-system-200 duration-150 focus:border-secondary outline-0 border-2 rounded-full",
          error? "border-error": "border-system-200",
          className
        )}
        {...props}
        type={type}
        ref={ref}
      />
       {error ? (
        <span className="text-error absolute left-0 top-full">{error}</span>
      ) : null}
    </label>
  );
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(TextInputComponent)