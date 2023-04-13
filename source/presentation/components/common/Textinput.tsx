import classNames from "classnames";
import { HTMLAttributes, InputHTMLAttributes } from "react";

interface TextinputProps extends HTMLAttributes<HTMLLabelElement>{
    label?: string
    type: "text" | "tel" | "password" | "email" | "textarea" | "date"
    inputProps?: InputHTMLAttributes<HTMLInputElement> & {
        ref?: React.Ref<HTMLInputElement>;
    };
}


export const Textinput = ({label, type, placeholder, inputProps, className}:TextinputProps) =>{


    return(
        <label className="block">
            <span className="block font-semibold text-lg">{label}</span>
            <input placeholder={placeholder} className={classNames("w-full drop-shadow-md text-base text-system-800 font-medium bg-system px-3 py-1 transition-all hover:border-system-200 duration-150 border-system-600 focus:border-secondary outline-0 border-2 rounded-full", className)} {...inputProps} type={type}/>
        </label>
    );
}