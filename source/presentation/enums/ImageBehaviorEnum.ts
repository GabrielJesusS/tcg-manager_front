export enum ImageBehaviorEnum {
    FIT = "fit",
    FILL = "fill",
    COVER = "cover",
    AUTO = "none"
}

export const BEHAVIOR_MAP = {
    [ImageBehaviorEnum.FIT]: "object-contain",
    [ImageBehaviorEnum.FILL]: "object-fill",
    [ImageBehaviorEnum.COVER]: "object-cover",
    [ImageBehaviorEnum.AUTO]: "object-none",
  };