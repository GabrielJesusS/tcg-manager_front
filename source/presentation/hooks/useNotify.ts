import { toast } from "react-toastify";
import { NotifyTypeEnum } from "../enums/NotifyTypeEnum";

interface IUseNotify {
  notify: (message: string, type: NotifyTypeEnum) => void;
}

export const useNotify = (): IUseNotify => {
  function notify(message: string, type: NotifyTypeEnum) {
    switch (type) {
      case NotifyTypeEnum.ERROR:
        toast(message, { type: "error" });
        break;
      case NotifyTypeEnum.SUCCESS:
        toast(message, { type: "success" });
        break;
      case NotifyTypeEnum.WARNING:
        toast(message, { type: "error" });
        break;

      default:
        toast(message, { type: "info" });

        break;
    }
  }

  return {
    notify,
  };
};
