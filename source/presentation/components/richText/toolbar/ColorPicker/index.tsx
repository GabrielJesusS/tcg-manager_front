import { useState } from "react";
import { ColorViewer } from "./ColorViewer";
import { COLOR_BG_MAP, ColorEnum } from "@/presentation/enums/ColorEnum";
import { Editor } from "slate";
import { useColor } from "@/presentation/hooks/richTextEditor/useColor";

function generateColorList(e: Record<ColorEnum, string>) {
  return Object.keys(e).map((i) => ({ value: e[i], name: i }));
}

const COLOR_LIST = generateColorList(COLOR_BG_MAP);

interface IColorPicker {
  editor: Editor;
}

export const ColorPicker = ({ editor }: IColorPicker): JSX.Element => {
  const [colorSelectorOpen, setColorSelectorOpen] = useState<boolean>(false);
  const { checkColor, toggleColor } = useColor(editor);

  function toggleSelector(): void {
    setColorSelectorOpen((i) => !i);
  }

  function changeColor(e: ColorEnum): void {
    toggleSelector();
    toggleColor(e);
  }

  return (
    <div className="relative">
      <ColorViewer color={checkColor ?? ColorEnum.BASE} onClick={toggleSelector} />
      {colorSelectorOpen ? (
        <div className="absolute z-20 left-0 top-full bg-system-100 rounded-2xl drop-shadow-lg p-3 w-44">
          <ul className="grid grid-cols-5 w-fit gap-2 mx-auto">
            {COLOR_LIST.map((e) => (
              <li className="block" key={e.name}>
                <ColorViewer
                  onClick={() => changeColor(e.name as ColorEnum)}
                  color={e.name}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
