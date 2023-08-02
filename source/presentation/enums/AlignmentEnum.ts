export enum AlignmentEnum {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
  JUSTIFY = "justify",
}

export const ALIGNMENT_TEXT_CLASS_MAP = {
  [AlignmentEnum.CENTER]: "text-center",
  [AlignmentEnum.LEFT]: "text-start",
  [AlignmentEnum.JUSTIFY]: "text-justify",
  [AlignmentEnum.RIGHT]: "text-end",
};

export const ALIGNMENT_BLOCK_CLASS_MAP = {
  [AlignmentEnum.CENTER]: "m-auto",
  [AlignmentEnum.LEFT]: "mr-auto",
  [AlignmentEnum.JUSTIFY]: "",
  [AlignmentEnum.RIGHT]: "ml-auto",
};
