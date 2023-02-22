import { HTMLAttributes } from "react";
import BG from "@/presentation/public/images/rsc/bgs/titlebg-1.gif";

interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> {}

export const Header = ({ children }: HeaderProps) => {
  return (
    <header className="relative h-fit">
      <div className="absolute bg-system-800 h-full w-full left-0 top-0 ">
        <img
          className="object-cover w-full h-full mix-blend-overlay"
          src={BG.src}
          height={700}
          width={1200}
          alt="pokemon forest background"
        />
      </div>
      <h1 className="relative mx-auto font-bold text-center py-4 uppercase text-system text-3.5xl leading-normal lg:text-6xl lg:py-16">
        {children}
      </h1>
    </header>
  );
};
