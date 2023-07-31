export enum AspectRatioEnum {
    SQUARE = "1/1",
    WIDE = "16/9",
    TV = "4/3",
    CARD = "card",
}


export const ASPECT_RATIO_MAP = {
    [AspectRatioEnum.WIDE]: "aspect-video",
    [AspectRatioEnum.SQUARE]: "aspect-square",
    [AspectRatioEnum.TV]: "aspect-tv",
    [AspectRatioEnum.CARD]: "aspect-card",
  };