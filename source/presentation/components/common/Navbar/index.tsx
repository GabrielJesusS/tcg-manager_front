import { HTMLAttributes } from "react";
import TCGLogo from "@/presentation/public/images/logo/logo.svg";
import { NavLinks } from "./Navlinks";
import { Navitem } from "./Navitem";
import Link from "next/link";

interface NavbarProps extends HTMLAttributes<HTMLHeadingElement> {}

export const Navbar = ({}: NavbarProps) => {
  return (
    <header className="bg-primary w-full relative">
      <div className="max-w-7xl px-6 py-2 flex items-center">
        <div>
          <TCGLogo />
        </div>
        <div>
          <nav>
            <ul>
              {NavLinks.map((item) => (
                <li key={item.id}>
                  {item.title}
                  <Navitem id={item.id} subitem={item.links}/>
                </li>
              ))}
            </ul>
            <Link className="" href="/login">Realizar login</Link>
          </nav>
        </div>
        <div>

        </div>
      </div>
    </header>
  );
};
