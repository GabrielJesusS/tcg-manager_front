import Link from "next/link";
import ChevronIcon from "@/presentation/public/images/icons/chevron.svg";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { useState } from "react";
import { userDataAtom } from "@/presentation/store/genericAtoms";
import { useRecoilValue } from "recoil";

interface INavitem {
  id: number;
  title: string;
  subitem: ILinks[];
}

interface ILinks {
  name: string;
  url: string;
  isPrivate: boolean;
}

export const Navitem = ({ id, subitem, title }: INavitem) => {
  const [isHide, setHide] = useState<boolean>(false);
  const userData = useRecoilValue(userDataAtom);

  function toggleHide() {
    setHide(!isHide);
  }

  const animateSettings: MotionProps = {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  return (
    <li>
      <button
        onClick={toggleHide}
        className="font-semibold text-lg uppercase flex w-full justify-between border-b border-system-800"
      >
        {title} <ChevronIcon className="fill-secondary w-6 inline" />
      </button>
      <AnimatePresence>
        {isHide && (
          <motion.div
            {...animateSettings}
            className="absolute bg-white w-full h-screen left-0 top-0 z-20 p-6"
          >
            <button
              onClick={toggleHide}
              className="text-3xl font-bold uppercase flex items-center my-6"
            >
              <ChevronIcon className="fill-secondary w-12 rotate-180 inline" />
              {title}
            </button>
            <ul className="space-y-6">
              {subitem.map(
                (item) =>
                  ((item.isPrivate && userData) || !item.isPrivate) && (
                    <li key={id + item.name}>
                      <Link
                        className="text-lg flex justify-between border-b border-system-800"
                        href={item.url}
                      >
                        {item.name}{" "}
                        <ChevronIcon className="fill-secondary w-6 inline" />
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};
