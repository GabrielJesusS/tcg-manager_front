import { HTMLAttributes } from "react";

interface TextinputProps extends HTMLAttributes<HTMLLabelElement>{
    label: string
    type: "text" | "tel" | "password" | "email" | "textarea" | "date"
    inputProps?: HTMLAttributes<HTMLInputElement>
}


export const Textinput = ({label, type, placeholder, inputProps}:TextinputProps) =>{


    return(
        <label className="block">
            <span className="block font-semibold text-lg">{label}</span>
            <input className="w-full px-3 py-1 transition-all hover:border-system-200 duration-150 border-system-600 focus:border-secondary outline-0 border-2 rounded-full" {...inputProps} type={type}/>
        </label>
    );
}