import { HTMLAttributes } from "react";

interface RadioinputProps extends HTMLAttributes<HTMLDivElement> {
  radioName: string;
  optionsQtd: number;
}

export const Radioinput = ({ radioName, optionsQtd }: RadioinputProps) => {
  return (
    <div>
      <fieldset className="flex space-x-2">
        <>
          <legend>{radioName}</legend>
          {Array.from({ length: optionsQtd }).map((i, index) => 
            <label key={radioName+index}>
              <input name={radioName} className="appearance-none peer" type="radio" value={index+1} />
              <span className="peer-checked:bg-secondary peer-checked:text-system text-lg h-9 w-9 font-bold rounded-full bg-system-200 text-system-600 flex justify-center items-center">
                {index+1}
              </span>
            </label>
          )}
        </>
      </fieldset>
    </div>
  );
};
