import { HTMLAttributes } from "react";
import CoffeeIcon from "@/presentation/public/images/icons/coffee.svg";
import classNames from "classnames";

interface FooterProps extends HTMLAttributes<HTMLElement> {}

export const Footer = ({ className }: FooterProps): JSX.Element => {
  return (
    <footer
      className={classNames(
        "sticky top-full bg-system-800 text-system w-full h-fit",
        className
      )}
    >
      <div className="p-4 w-fit mx-auto text-center text-xs md:text-base">
        <p className="text-base">
          Pokémon images and names
          <br />© 1995 - 2022 Nintendo/ Gamefreak
        </p>
        <p>
          Created by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="dft-link"
            href="https://github.com/L3m0S"
          >
            Gabriel Lemos
          </a>{" "}
          &{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="dft-link"
            href="https://github.com/GabrielJesusS"
          >
            Gabriel Jesus
          </a>{" "}
          <CoffeeIcon className="inline" />
        </p>
      </div>
    </footer>
  );
};
