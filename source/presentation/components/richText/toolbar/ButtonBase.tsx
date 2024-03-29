import classNames from "classnames";
import { HTMLAttributes } from "react";

interface IButtonBase extends HTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const ButtonBase = ({ active, onClick, children }: IButtonBase):JSX.Element => {
  return (
    <button
      type="button"
      title="Funcionalidade do editor de texto "
      onClick={onClick}
      className={classNames(
        "block rounded-md w-fit mx-auto transition-all duration-150 ease-in-out",
        active ? "bg-secondary text-system hover:bg-secondary-dark" : "text-system-400 hover:bg-system-200"
      )}
    >
      {children}
    </button>
  );
};
