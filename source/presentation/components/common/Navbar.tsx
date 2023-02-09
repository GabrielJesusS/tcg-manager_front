import { HTMLAttributes } from "react";
import TCGLogo from "@/presentation/public/images/logo/logo.svg"

interface NavbarProps extends HTMLAttributes<HTMLHeadingElement>{

}

export const Navbar = ({}:NavbarProps) =>{



    return(
        <header className="bg-primary w-full relative">
            <div className="max-w-7xl px-6 py-2 flex items-center">
                <div>
                    <TCGLogo/>
                </div>
                <div>
                    <nav>
                        <ul className="flex select-none">
                            <li className="group">
                                <span className="text-system uppercase relative after:max-w-0 after:w-full group-hover:after:block after:bg-system after:-bottom-2 after:left-0 after:absolute group-hover:after:max-w-full after:transition-all after:duration-150 after:h-1 font-medium">Decks</span>
                                <ul className="group-hover:flex hover:flex hidden before:h-6 before:w-full before:left-0 before:block before:absolute before:-top-6 absolute space-x-10 font-light px-8 py-4 bg-system w-full left-0 top-full">
                                    <li className="cursor-pointer">Listagem</li>
                                    <li className="cursor-pointer">Novos</li>
                                    <li className="cursor-pointer">Destaques</li>
                                    <li className="cursor-pointer">Construtor</li>
                                </ul>
                            </li>
                            <li className="group">
                                <span className="text-system uppercase relative after:max-w-0 after:w-full group-hover:after:block after:bg-system after:-bottom-2 after:left-0 after:absolute group-hover:after:max-w-full after:transition-all after:duration-150 after:h-1 font-medium">Decks</span>
                                <ul className="group-hover:flex hover:flex hidden before:h-6 before:w-full before:left-0 before:block before:absolute before:-top-6 absolute space-x-10 font-light px-8 py-4 bg-system w-full left-0 top-full">
                                    <li className="cursor-pointer">Listagem</li>
                                    <li className="cursor-pointer">Novos</li>
                                    <li className="cursor-pointer">Destaques2</li>
                                    <li className="cursor-pointer">Construtor</li>
                                </ul>
                            </li>
                            <li className="group">
                                <span className="text-system uppercase relative after:max-w-0 after:w-full group-hover:after:block after:bg-system after:-bottom-2 after:left-0 after:absolute group-hover:after:max-w-full after:transition-all after:duration-150 after:h-1 font-medium">Decks</span>
                                <ul className="group-hover:flex hover:flex hidden before:h-6 before:w-full before:left-0 before:block before:absolute before:-top-6 absolute space-x-10 font-light px-8 py-4 bg-system w-full left-0 top-full">
                                    <li className="cursor-pointer">Listagem</li>
                                    <li className="cursor-pointer">Novos</li>
                                    <li className="cursor-pointer">Destaques3</li>
                                    <li className="cursor-pointer">Construtor</li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>

                </div>
            </div>
        </header>
    )
}