import { useState } from "react";
import TCGLogo from "@/presentation/public/images/logo/logo.svg";
import { NavLinks } from "./Navlinks";
import { Navitem } from "./Navitem";
import Link from "next/link";
import { motion, AnimatePresence, MotionProps } from "framer-motion";
import classNames from "classnames";
import { Userdata } from "../Userdata";
import { useRecoilValue } from "recoil";
import { userDataAtom } from "@/presentation/store/genericAtoms";
import { createSignOutUsecase } from "@/factories/createSignOutUsecase";
import { useRouter } from "next/router";
import { loadUserData } from "@/presentation/middlewares/loadUserData";

const signOutUsecase = createSignOutUsecase();

export const  Navbar = loadUserData((): JSX.Element =>  {
  const [isHideMenu, setHideMenu] = useState<boolean>(false);
  const { reload } = useRouter();
  const userData = useRecoilValue(userDataAtom);

  function toggleMenu(): void {
    setHideMenu(!isHideMenu);
  }

  async function logOutUser(): Promise<void> {
    const response = await signOutUsecase.execute();

    if (response.isLeft()) {
      return;
    }

    reload();
  }

  const animateSettings: MotionProps = {
    initial: { y: "-100%" },
    animate: { y: 0 },
    exit: { y: "-100%" },
    transition: { duration: 0.3, type: "keyframes", ease: "easeInOut" },
  };

  return (
    <header className={classNames("bg-primary w-full sticky z-20 top-0")}>
      <div className="mx-auto px-6 py-2 flex items-center justify-between">
        <Link href={"/"}>
          <TCGLogo className={"h-12"} />
        </Link>
        <AnimatePresence>
          {isHideMenu && (
            <motion.div
              onClick={toggleMenu}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              className="bg-black/25 absolute h-screen w-full left-0 top-0 z-10"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isHideMenu && (
            <motion.div
              {...animateSettings}
              className="absolute top-0 right-0 md:max-w-md w-full h-screen bg-system z-20 p-6 overflow-hidden"
            >
              <nav>
                {userData && (
                  <Userdata
                    userId={userData.id.toString()}
                    userLevel={userData.experience_level}
                    userPicture={""}
                    username={userData.name}
                  />
                )}
                <ul className="space-y-6 my-20 ">
                  {NavLinks.map((item) => (
                    <Navitem
                      id={item.id}
                      key={item.id}
                      subitem={item.links}
                      title={item.title}
                    />
                  ))}
                </ul>
                {!userData && (
                  <Link className="btn btn-primary w-full" href="/login">
                    Realizar login
                  </Link>
                )}
                {userData && (
                  <button
                    onClick={logOutUser}
                    className="btn btn-error-outline w-full"
                  >
                    Sair
                  </button>
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
        <div>
          <button
            onClick={toggleMenu}
            className="relative z-30 h-10 w-10 p-1 block"
          >
            <svg
              viewBox="0 0 24 24"
              className={classNames(
                "bg-transparent transition-all duration-1000 ease-in-out",
                isHideMenu ? "stroke-system-800" : "stroke-system"
              )}
            >
              <motion.path
                animate={isHideMenu ? "open" : "closed"}
                initial={false}
                transition={{ duration: 0.3 }}
                strokeWidth={3}
                strokeLinecap="round"
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
              />
              <motion.path
                animate={isHideMenu ? "open" : "closed"}
                d="M 2 9.423 L 20 9.423"
                initial={false}
                transition={{ duration: 0.3 }}
                strokeWidth={3}
                strokeLinecap="round"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
              />
              <motion.path
                animate={isHideMenu ? "open" : "closed"}
                initial={false}
                transition={{ duration: 0.3 }}
                strokeWidth={3}
                strokeLinecap="round"
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
              />
              <motion.path
                animate={isHideMenu ? "open" : "closed"}
                initial={false}
                transition={{ duration: 0.3 }}
                strokeWidth={3}
                strokeLinecap="round"
                variants={{
                  closed: { d: "M 2 16.346 L 20 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" },
                }}
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
});




