import RotomDex from "@/presentation/public/images/rsc/rotom-dex.png";
import { AnimatePresence, AnimationProps, motion } from "framer-motion";
import { useState } from "react";

export const DeckBuilderAssistent = (): JSX.Element => {
  const [open, toggle] = useState<boolean>(false);

  function toggleHelper() {
    toggle((old) => !old);
  }

  const animate: AnimationProps = {
    initial: { opacity: 0, translateY: "10%", translateX: "-50%" },
    animate: { opacity: 1, translateY: "0%" },
    exit: { opacity: 0, translateY: "10%" },
    transition: {
      bounce: false,
    },
  };

  return (
    <div className="fixed bottom-24 right-24 text-sm text-system-800">
      <button
        type="button"
        onClick={toggleHelper}
        className="h-24 w-24 drop-shadow-2xl"
      >
        <img src={RotomDex.src} alt="" />
      </button>
      <AnimatePresence>
        {open && (                                                                    
          <motion.div
            {...animate}
            className="absolute w-60 p-safe space-y-2 border-2 border-system-200 rounded-lg shadow-black/30 shadow-lg bg-system bottom-full left-1/2 -translate-x-1/2"
          >
            <h4 className="text-base font-semibold">
              Rotom tem algumas dicas para seu deck!
            </h4>
            <p>O seu deck deve conter:</p>
            <ul className="list-disc list-inside">
              <li>60 cartas!</li>
              <li>Um Pokémon básico!</li>
              <li>10 energias básicas</li>
            </ul>
            <p className="text-system-600">
              E não se esqueça das informações como nome e descrição!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
