import { animate, motion } from "framer-motion";
import { HTMLAttributes } from "react";
import { AnimationProps, AnimatePresence } from "framer-motion";
import CloseIcon from "@/presentation/public/images/icons/close.svg";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
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
}

export const Modal = ({
  children,
  action,
  isOpen,
  close,
  secondAction,
}: ModalProps) => {
  const animationsSettings: AnimationProps = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.15,
      },
    },
    transition: {
      duration: 0.15,
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          {...animationsSettings}
          className="bg-system-800/25 p-safe top-0 flex z-40 h-screen w-full fixed justify-center items-center"
        >
          <div className="bg-system p-6 rounded-lg z-50 max-w-4xl w-full">
            <div className="w-full flex justify-end">
              <button
                className="bg-error p-2 rounded-full"
                onClick={() => close()}
              >
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};
