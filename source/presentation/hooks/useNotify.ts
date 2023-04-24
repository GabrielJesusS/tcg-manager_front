import { toast } from "react-toastify";
import { NOTIFY_TYPE_ENUM } from "../enums/NotifyTypeEnum";

interface IUseNotify {
  notify: (message: string, type: NOTIFY_TYPE_ENUM) => void;
}

export const useNotify = (): IUseNotify => {
  function notify(message: string, type: NOTIFY_TYPE_ENUM) {
    switch (type) {
      case NOTIFY_TYPE_ENUM.ERROR:
        toast(message, { type: "error" });
        break;
      case NOTIFY_TYPE_ENUM.SUCCESS:
        toast(message, { type: "success" });
        break;
      case NOTIFY_TYPE_ENUM.WARNING:
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
