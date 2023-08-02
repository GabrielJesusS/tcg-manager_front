import { ToastOptions, toast } from "react-toastify";
import { NotifyTypeEnum } from "../enums/NotifyTypeEnum";
import LoadingIcon from "@/presentation/public/images/icons/loading.svg";

interface IUseNotify {
  notify: (message: string, type: NotifyTypeEnum) => void;
}

export const useNotify = (): IUseNotify => {
  function notify(
    message: string,
    type: NotifyTypeEnum,
    config?: ToastOptions
  ) {
    toast(
      () => (
        <div className="font-poppins">
          {message}
          <span className="absolute -right-8 top-8">
            <LoadingIcon className="fill-system-200 h-16 rotate-45" />
          </span>
        </div>
      ),
      { type, ...config } as ToastOptions
    );
  }

  return {
    notify,
  };
};
