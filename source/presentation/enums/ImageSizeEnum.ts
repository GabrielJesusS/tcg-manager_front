export enum ImageSizeEnum {
  FULL = "full",
  SEVENTY_FIVE = "seventy-five",
  HALF = "half",
  TWENTY_FIVE = "twenty-five",
}


export const SIZE_MAP = {
  [ImageSizeEnum.FULL]: "w-full",
  [ImageSizeEnum.SEVENTY_FIVE]: "w-3/4",
  [ImageSizeEnum.HALF]: "w-1/2",
  [ImageSizeEnum.TWENTY_FIVE]: "w-1/4",
};