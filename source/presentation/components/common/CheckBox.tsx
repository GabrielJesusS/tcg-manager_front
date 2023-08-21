import { InputHTMLAttributes, Ref, forwardRef } from "react";

interface ICheckBox extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const CheckBoxComponent = (
  { label, ...props }: ICheckBox,
  ref: Ref<HTMLInputElement>
): JSX.Element => {
  return (
    <label className="flex space-x-2 items-center">
      <input ref={ref} type="checkbox" {...props} />
      <span className="block">{label}</span>
    </label>
  );
};

export const CheckBox = forwardRef<HTMLInputElement, ICheckBox>(
  CheckBoxComponent
);
