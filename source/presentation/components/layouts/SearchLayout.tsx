import { ChangeEvent, useEffect, useState } from "react";
import { Breadcrumb } from "../common/Breadcrumb";
import { Dropdown } from "../common/Dropdown";
import { Header } from "../common/Header";
import { Textinput } from "../common/Textinput";
import { DefaultLayout } from "./DefaultLayout";
import { useDebounce } from "@/presentation/hooks/useDebounce";
import { useRecoilState, useSetRecoilState } from "recoil";
import { filterSearchAtom } from "@/presentation/store/genericAtoms";
import CloseIcon from "@/presentation/public/images/icons/close.svg";
import {
  motion,
  AnimatePresence,
  AnimationProps,
  animate,
} from "framer-motion";
import { useGetMobile } from "@/presentation/hooks/useGetMobile";

interface ISearchLayout {
  filters: React.ReactNode;
  children: React.ReactNode;
}

export const SearchLayout = ({ children, filters }: ISearchLayout) => {
  const filterAnimation: AnimationProps = {
    initial: { opacity: 0, translateX: "-100%" },
    animate: { opacity: 1, translateX: "0%" },
    exit: { opacity: 0, translateX: "-100%" },
    transition: {
      bounce: false,
    },
  };

  const [filterOpen, setFilterOpen] = useState<boolean>(true);
  const isMobile = useGetMobile();
  const debounce = useDebounce(search, 1000);

  useEffect(() => {
    setFilterOpen(!isMobile);
  }, [isMobile]);

  const [filterValues, setFilterParams] = useRecoilState(filterSearchAtom);

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    debounce(event.target.value);
  }

  function toggleFilter() {
    setFilterOpen((old) => !old);
  }

  function search(name: string) {
    setFilterParams({ ...filterValues ,name });
  }

  return (
    <DefaultLayout>
      <main className="flex w-full bg-dft-pattern  min-h-screen bg-slate-400">
        <div className="w-full max-w-7xl mx-auto  flex flex-col ">
          <Header>
            <div className="px-16">
              Cartas
              <Textinput
                type="text"
                placeholder="Buscar por..."
                inputProps={{ onChange: handleSearch}}
              />
            </div>
          </Header>
          <section className="flex h-full ">
            <AnimatePresence>
              {filterOpen && (
                <motion.div
                  {...filterAnimation}
                  className="w-full h-full lg:max-w-xs top-0 bg-system p-4 fixed lg:relative z-20 lg:z-0"
                >
                  <div className="sticky left-0 top-20 flex flex-col">
                    <button
                      onClick={toggleFilter}
                      className="lg:hidden self-end"
                    >
                      <CloseIcon className="w-8 h-8 fill-system-800" />
                    </button>
                    <h3 className="text-2xl font-bold text-center ">Filtros</h3>
                    <div>{filters}</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="w-full h-full p-safe space-y-safe bg-system-100">
              <div className="flex justify-between flex-col md:flex-row">
                <Breadcrumb />
                <div className="md:max-w-xs w-full relative space-y-4">
                  <Dropdown placeholder="Ordenar por..." options={[]} />
                  <button
                    onClick={toggleFilter}
                    className="btn btn-primary w-full lg:hidden"
                  >
                    {" "}
                    Filtros
                  </button>
                </div>
              </div>
              {children}
            </div>
          </section>
        </div>
      </main>
    </DefaultLayout>
  );
};
