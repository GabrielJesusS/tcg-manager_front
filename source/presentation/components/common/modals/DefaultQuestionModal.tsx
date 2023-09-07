import CloseIcon from "@/presentation/public/images/icons/close.svg";
import { Modal } from "../Modal";
import classNames from "classnames";

interface IDefaultQuestionModal {
  title?: string;
  isOpen: boolean;
  action?: {
    actionText: string;
    actionClick: () => void;
  };
  secondAction?: {
    secondActionText: string;
    secondActionClick: () => void;
  };
  close: () => void;
  fullSize?: boolean;
  children?: React.ReactNode;
  small?: boolean;
}

export const DefaultQuestionModal = ({
  children,
  action,
  isOpen,
  close,
  secondAction,
  fullSize,
  title,
  small,
}: IDefaultQuestionModal): JSX.Element => {
  return (
    <Modal isOpen={isOpen}>
      <div
        className={classNames(
          "bg-system z-50",
          {
            "max-w-4xl mx-auto h-fit rounded-lg p-safe": !fullSize,
            "h-full flex flex-col": fullSize,
          },
          small ? "w-fit" : " w-full"
        )}
      >
        <div
          className={classNames(
            "w-full flex items-center",
            title ? "justify-between space-x-4" : "justify-end"
          )}
        >
          {title ? (
            <span
              className={classNames("font-bold text-xl block", {
                " mt-safe ml-safe": fullSize,
              })}
            >
              {title}
            </span>
          ) : null}
          <button
            className={classNames("bg-error p-2 rounded-full", {
              "mt-safe mr-safe": fullSize,
            })}
            onClick={() => {
              close();
            }}
          >
            <CloseIcon className="h-5 fill-system" />
          </button>
        </div>
        {children}
        <div className="flex space-x-4">
          {action && (
            <button
              onClick={() => {
                action.actionClick();
              }}
              className="btn btn-primary"
            >
              {action.actionText}
            </button>
          )}
          {secondAction && (
            <button
              onClick={() => {
                secondAction.secondActionClick();
              }}
              className="btn btn-error"
            >
              {secondAction.secondActionText}
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};
