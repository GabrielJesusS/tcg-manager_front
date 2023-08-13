import { ImageBehaviorEnum } from "@/presentation/enums/ImageBehaviorEnum";
import { ButtonBase } from "../../../toolbar/ButtonBase";

interface IBehaviorSelector {
  onChange: (e: ImageBehaviorEnum) => void;
  value: ImageBehaviorEnum;
}

const SIZE_LABELS = {
  [ImageBehaviorEnum.FIT]: "Fit",
  [ImageBehaviorEnum.FILL]: "Fill",
  [ImageBehaviorEnum.COVER]: "Cover",
  [ImageBehaviorEnum.AUTO]: "None",
};

export const BehaviorSelector = ({
  onChange,
  value,
}: IBehaviorSelector): JSX.Element => {
  return (
    <span>
      <ol className="flex space-x-2">
        {Object.values(ImageBehaviorEnum).map((behavior) => (
          <li key={behavior}>
            <ButtonBase
              active={value === behavior}
              onClick={() => {
                onChange(behavior);
              }}
            >
              {SIZE_LABELS[behavior]}
            </ButtonBase>
          </li>
        ))}
      </ol>
    </span>
  );
};
