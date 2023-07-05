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
        "block rounded-md",
        active ? "bg-secondary text-system" : "text-system-400"
      )}
    >
      {children}
    </button>
  );
};
