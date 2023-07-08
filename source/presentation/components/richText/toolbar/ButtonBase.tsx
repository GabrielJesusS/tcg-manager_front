import classNames from "classnames";
import { HTMLAttributes, MouseEventHandler } from "react";

interface IButtonBase extends HTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const ButtonBase = ({ active, onClick, children }: IButtonBase) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        "block rounded-md hover:bg-system-200 transition-all duration-150 ease-in-out",
        active ? "bg-secondary text-system hover:bg-secondary-dark" : "text-system-400"
      )}
    >
      {children}
    </button>
  );
};
