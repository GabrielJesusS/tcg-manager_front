import { ToastOptions, toast } from "react-toastify";
import { StatusEnum } from "../enums/NotifyTypeEnum";
import LoadingIcon from "@/presentation/public/images/icons/loading.svg";

interface IUseNotify {
  notify: (message: string, type: StatusEnum) => void;
}

export const useNotify = (): IUseNotify => {
  function notify(
    message: string,
    type: StatusEnum,
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
