export enum StatusEnum {
  ERROR = "error",
  WARNING = "warning",
  SUCCESS = "success",
  INFO = "info",
  NEW = "new"
}

export const STATUS_CLASS_MAP: Record<StatusEnum, string> = {
  [StatusEnum.ERROR]: "bg-error",
  [StatusEnum.INFO]: "bg-confirm",
  [StatusEnum.WARNING]: "bg-warning",
  [StatusEnum.SUCCESS]: "bg-success",
  [StatusEnum.NEW]: "bg-system-200"
};
