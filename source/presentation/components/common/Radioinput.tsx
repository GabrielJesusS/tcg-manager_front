import { HTMLAttributes } from "react";

interface RadioinputProps extends HTMLAttributes<HTMLDivElement> {
  radioName: string;
  optionsQtd: number;
}

export const Radioinput = ({
  radioName,
  optionsQtd,
  className,
}: RadioinputProps): JSX.Element => {
  return (
    <div className={className}>
      <fieldset>
        <>
          <legend className="font-semibold text-lg">{radioName}</legend>
          <div className="space-x-2 flex">
            {Array.from({ length: optionsQtd }).map((_, index) => (
              <label key={`${radioName}${index}`} className="h-fit block">
                <input
                  name={radioName}
                  className="hidden peer"
                  type="radio"
                  value={index + 1}
                />
                <span className="peer-checked:bg-secondary peer-checked:text-system text-lg h-9 w-9 font-bold rounded-full bg-system-200 text-system-600 flex leading-none justify-center items-center">
                  {index + 1}
                </span>
              </label>
            ))}
          </div>
        </>
      </fieldset>
    </div>
  );
};
