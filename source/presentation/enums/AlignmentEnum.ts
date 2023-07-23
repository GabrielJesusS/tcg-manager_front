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
  [AlignmentEnum.CENTER]: "justify-center",
  [AlignmentEnum.LEFT]: "justify-start",
  [AlignmentEnum.JUSTIFY]: "justify-around",
  [AlignmentEnum.RIGHT]: "justify-end",
};
