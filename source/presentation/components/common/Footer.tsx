import Link from "next/link"
import { HTMLAttributes } from "react"

interface FooterProps extends HTMLAttributes<HTMLElement>{

}

export const Footer = ({}:FooterProps)=>{


    return(
        <footer>
            <div>
                <p>Created by <Link href="#">Gabriel Jesus</Link> & <Link href="#">Gabriel Lemos</Link></p>
            </div>
        </footer>
    )
}