import { AnimatePresence, AnimationProps, motion } from "framer-motion";

interface IBorderlessModal {
  isOpen: boolean;
  children: React.ReactNode;
}

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

export const BorderlessModal = ({
  isOpen,
  children,
}: IBorderlessModal): JSX.Element => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          {...animationsSettings}
          className="h-screen fixed inset-0 z-20 w-full bg-system overflow-hidden "
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
