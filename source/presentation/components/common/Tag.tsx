import { COLOR_BG_MAP } from "@/presentation/enums/ColorEnum";
import classNames from "classnames";
import CloseIcon from "@/presentation/public/images/icons/close.svg";
import { useMemo } from "react";

interface ITagProps {
  text: string;
  onClose?: () => void;
}

export const Tag = ({ text, onClose }: ITagProps): JSX.Element => {
  const color = useMemo(() => {
    const colorArray = Object.values(COLOR_BG_MAP);
    return colorArray[Math.floor(Math.random() * colorArray.length)];
  }, []);

  return (
    <span
    title={text}
      className={classNames(
        "w-fit py-1 flex items-center space-x-2 rounded-full",
        color, onClose ? 'pl-4 pr-2': 'px-4'
      )}
    >
      <span className="text-sm uppercase select-none text-system leading-none">{text}</span>
      {onClose ? (
        <button type="button" onClick={onClose}>
          <CloseIcon className="w-4 h-4 fill-system" />
        </button>
      ) : null}
    </span>
  );
};
