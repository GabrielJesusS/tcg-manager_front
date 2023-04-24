import CloseIcon from "@/presentation/public/images/icons/close.svg";
import { HTMLAttributes } from "react";
import { Modal } from "../Modal";
import classNames from "classnames";

interface IDefaultQuestionModal{
  isOpen: boolean;
  action?: {
    actionText: string;
    actionClick: Function;
  };
  secondAction?: {
    secondActionText: string;
    secondActionClick: Function;
  };
  close: Function;
  fullSize?: boolean;
  children?: React.ReactNode
}

export const DefaultQuestionModal = ({
  children,
  action,
  isOpen,
  close,
  secondAction,
  fullSize
}: IDefaultQuestionModal) => {
  return (
    <Modal isOpen={isOpen}>
      <div className={classNames("bg-system z-50 w-full", {
        "max-w-4xl mx-safe rounded-lg p-safe": !fullSize,
        "h-screen overflow-auto" : fullSize
      } )}>
        <div className="w-full flex justify-end">
          <button className={classNames("bg-error p-2 rounded-full",{"mt-safe mr-safe" :fullSize})}onClick={() => close()}>
            <CloseIcon className="h-5 fill-system" />
          </button>
        </div>
        {children}
        {action && (
          <button
            onClick={() => action.actionClick()}
            className="btn btn-primary"
          >
            {action.actionText}
          </button>
        )}
        {secondAction && (
          <button
            onClick={() => secondAction.secondActionClick()}
            className="btn btn-error"
          >
            {secondAction.secondActionText}
          </button>
        )}
      </div>
    </Modal>
  );
};
