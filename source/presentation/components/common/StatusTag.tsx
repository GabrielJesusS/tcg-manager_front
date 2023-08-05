import {
  STATUS_CLASS_MAP,
  StatusEnum,
} from "@/presentation/enums/NotifyTypeEnum";
import classNames from "classnames";

interface IStatusTagProps {
  status: StatusEnum;
  message: string;
  description?: string;
  badge?: boolean;
}

export const StatusTag = ({
  message,
  status = StatusEnum.SUCCESS,
  description,
  badge = false,
}: IStatusTagProps): JSX.Element => {
  return (
    <span
      className={classNames(
        " select-none drop-shadow-lg group text-xs sm:text-sm font-bold text-system p-2 rounded-lg inset-2 w-fit h-fit",
        { absolute: badge, "cursor-help": description },
        STATUS_CLASS_MAP[status]
      )}
    >
      {message}
      {description ? (
        <span className="absolute after:absolute after:w-full after:h-10 after:left-0 after:top-2/3 -translate-y-0 group-hover:-translate-y-2 group-hover:opacity-100 opacity-0 transition-all duration-150  w-60 -translate-x-1/2 text-center bg-system-800/80 p-2 rounded-lg drop-shadow-lg left-1/2  m-auto bottom-full select-none">
          {description}
        </span>
      ) : null}
    </span>
  );
};
