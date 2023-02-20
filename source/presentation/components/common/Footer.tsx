import Link from "next/link"
import { HTMLAttributes } from "react"
import CoffeeIcon from "@/presentation/public/images/icons/coffee.svg"
import classNames from "classnames"

interface FooterProps extends HTMLAttributes<HTMLElement>{

}

export const Footer = ({className}:FooterProps)=>{


    return(
        <footer className={classNames("bg-system-800 text-system w-full h-fit", className)}>
            <div className="p-4 w-fit mx-auto text-center text-xs md:text-base">
                <p className="text-base">Pokémon images and names<br/>© 1995 - 2022 Nintendo/ Gamefreak</p>
                <p>Created by <Link className="dft-link" href="#">Gabriel Jesus</Link> & <Link className="dft-link" href="#">Gabriel Lemos</Link> <CoffeeIcon className="inline"/></p>
            </div>
        </footer>
    )
}