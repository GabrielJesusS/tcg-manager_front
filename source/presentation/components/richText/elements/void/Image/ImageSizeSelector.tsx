import { ButtonBase } from "../../../toolbar/ButtonBase";
import { ImageSizeEnum } from "@/presentation/enums/ImageSizeEnum";

interface IImageSizeSelector {
  onChange: (e: ImageSizeEnum) => void;
  value: ImageSizeEnum;
}

const SIZE_LABELS = {
    [ImageSizeEnum.FULL]: "100%",
    [ImageSizeEnum.SEVENTY_FIVE]: "75%",
    [ImageSizeEnum.HALF]: "50%",
    [ImageSizeEnum.TWENTY_FIVE]: "25%",
};

export const ImageSizeSelector = ({
  onChange,
  value,
}: IImageSizeSelector): JSX.Element => {
  return (
    <span className="flex space-x-2">
      {Object.values(ImageSizeEnum).map((size) => (
        <ButtonBase
          active={value === size}
          onClick={() => onChange(size)}
          key={size}
        >
          {SIZE_LABELS[size]}
        </ButtonBase>
      ))}
    </span>
  );
};
