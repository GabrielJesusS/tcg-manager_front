import { HTMLAttributes } from "react";
import { AnimationProps, AnimatePresence, motion } from "framer-motion";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}

export const Modal = ({ isOpen, children }: ModalProps): JSX.Element => {
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
          className="bg-system-800/25 flex z-40 h-screen max-h-screen w-full fixed top-0 left-0 justify-center items-center"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
