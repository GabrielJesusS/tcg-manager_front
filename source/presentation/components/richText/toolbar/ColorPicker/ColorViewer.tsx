import { COLOR_BG_MAP, ColorEnum } from "@/presentation/enums/ColorEnum";
import classNames from "classnames";

interface IColorViewer {
  color: string;
  onClick: () => void;
}

export const ColorViewer = ({ color, onClick }: IColorViewer): JSX.Element => {
  return (
    <button
      onClick={onClick}
      title={color}
      className={classNames("h-6 w-6 grow block transition-all duration-150 ease-in-out hover:border-secondary active:border-secondary-light rounded-full border-4 border-system-400", COLOR_BG_MAP[color])}
    >
    </button>
  );
};
