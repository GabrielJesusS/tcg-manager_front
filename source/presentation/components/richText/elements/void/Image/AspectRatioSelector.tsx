import { AspectRatioEnum } from "@/presentation/enums/AspectRatioEnum";
import { ButtonBase } from "../../../toolbar/ButtonBase";
import AspectRatioWide from "@/presentation/public/images/icons/editor/aspect-ratio-16-9.svg";
import AspectRatioSquare from "@/presentation/public/images/icons/editor/aspect-ratio-1-1.svg";
import AspectRatioTV from "@/presentation/public/images/icons/editor/aspect-ratio-4-3.svg";
import AspectRatioCard from "@/presentation/public/images/icons/editor/aspect-ratio-card.svg";

interface IAspectRatioSelectorProps {
  onChange: (e: AspectRatioEnum) => void;
  value: AspectRatioEnum;
}

const ASPECT_RATIO_LABEL = {
  [AspectRatioEnum.WIDE]: <AspectRatioWide />,
  [AspectRatioEnum.TV]: <AspectRatioTV />,
  [AspectRatioEnum.SQUARE]: <AspectRatioSquare />,
  [AspectRatioEnum.CARD]: <AspectRatioCard />,
};

export const AspectRatioSelector = ({
  onChange,
  value,
}: IAspectRatioSelectorProps): JSX.Element => {
  return (
    <span>
      <ol className="flex space-x-2">
        {Object.values(AspectRatioEnum).map((aspect) => (
          <li key={aspect}>
            <ButtonBase
              active={value === aspect}
              onClick={() => {
                onChange(aspect);
              }}
            >
              {ASPECT_RATIO_LABEL[aspect]}
            </ButtonBase>
          </li>
        ))}
      </ol>
    </span>
  );
};
