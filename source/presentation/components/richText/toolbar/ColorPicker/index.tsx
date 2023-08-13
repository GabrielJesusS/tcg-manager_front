import { useEffect, useState } from "react";
import { ColorViewer } from "./ColorViewer";
import { COLOR_BG_MAP, ColorEnum } from "@/presentation/enums/ColorEnum";
import { useFocused, useSlateStatic } from "slate-react";
import { toggleColors } from "@/presentation/utils/editor/toggleColors";
import { checkActiveColor } from "@/presentation/utils/editor/checkActiveColor";

function generateColorList(
  e: Record<ColorEnum, string>
): Array<{ value: string; name: string }> {
  return Object.keys(e).map((i) => ({ value: e[i], name: i }));
}

const COLOR_LIST = generateColorList(COLOR_BG_MAP);

export const ColorPicker = (): JSX.Element => {
  const editor = useSlateStatic();
  const [colorSelectorOpen, setColorSelectorOpen] = useState<boolean>(false);
  const editorFocus = useFocused();

  function toggleSelector(): void {
    setColorSelectorOpen((i) => !i);
  }

  function changeColor(e: ColorEnum): void {
    toggleSelector();
    toggleColors(editor, e);
  }

  useEffect(() => {
    if (editorFocus && colorSelectorOpen) {
      setColorSelectorOpen(false);
    }
  }, [editorFocus]);

  return (
    <div className="relative mx-auto">
      <ColorViewer
        color={checkActiveColor(editor) ?? ColorEnum.BASE}
        onClick={toggleSelector}
      />
      {colorSelectorOpen ? (
        <div className="absolute z-20 right-0 md:left-0 top-full bg-system-100 rounded-2xl drop-shadow-lg  p-3 w-44">
          <ul className="grid grid-cols-5 w-fit gap-2 mx-auto">
            {COLOR_LIST.map((e) => (
              <li className="block" key={e.name}>
                <ColorViewer
                  onClick={() => {
                    changeColor(e.name as ColorEnum);
                  }}
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
