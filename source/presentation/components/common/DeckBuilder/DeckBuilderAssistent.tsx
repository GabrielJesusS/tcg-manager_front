import RotomDex from "@/presentation/public/images/rsc/rotom-dex.png";
import classNames from "classnames";
import { AnimatePresence, AnimationProps, motion } from "framer-motion";
import { useMemo, useState } from "react";

const ROTOM_ANIMATIONS = ["animate_swing", "animate_wobble", "animate_tada"];

export const DeckBuilderAssistent = (): JSX.Element => {
  const [open, toggle] = useState<boolean>(false);
  const [hasMessage, setNewMessage] = useState(true);
  const [message, setMessage] = useState("");

  function toggleHelper(): void {
    if (hasMessage) setNewMessage(false);
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

  const RANDOM_ANIMATION = useMemo(() => {
    return ROTOM_ANIMATIONS[
      Math.floor(Math.random() * ROTOM_ANIMATIONS.length)
    ];
  }, [hasMessage]);

  return (
    <div className="fixed bottom-24 right-24 text-sm text-system-800">
      <button
        type="button"
        onClick={toggleHelper}
        className={classNames(
          "h-24 w-24 drop-shadow-2xl animate animate_infinite",
          { [RANDOM_ANIMATION]: hasMessage }
        )}
      >
        <img src={RotomDex.src} alt="" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            {...animate}
            className="absolute w-60 p-safe space-y-2 border-2 border-system-200 rounded-lg shadow-black/30 shadow-lg bg-system bottom-full left-1/2 -translate-x-1/2"
          >
            {!message ? (
              <>
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
              </>
            ) : (
              message
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
