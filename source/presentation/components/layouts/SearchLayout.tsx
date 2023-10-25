import { ChangeEvent, useEffect, useState } from "react";
import { Breadcrumb } from "../common/Breadcrumb";
import { Header } from "../common/Header";
import { TextInput } from "../common/Textinput";
import { DefaultLayout } from "./DefaultLayout";
import { useDebounce } from "@/presentation/hooks/useDebounce";
import { useRecoilState } from "recoil";
import { filterParamsAtom } from "@/presentation/store/filters/cardFiltersAtom";
import CloseIcon from "@/presentation/public/images/icons/close.svg";
import { motion, AnimatePresence, AnimationProps } from "framer-motion";
import { useGetMobile } from "@/presentation/hooks/useGetMobile";
import { Button } from "../common/Button";

interface ISearchLayout {
  tilte: React.ReactNode;
  filters: React.ReactNode;
  children: React.ReactNode;
  disableFilters?: boolean;
  filterName: string;
}

export const SearchLayout = ({
  children,
  filters,
  tilte,
  filterName,
  disableFilters,
}: ISearchLayout): JSX.Element => {
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

  const [filterValues, setFilterParams] = useRecoilState(filterParamsAtom(filterName));

  function handleSearch(event: ChangeEvent<HTMLInputElement>): void {
    debounce(event.target.value);
  }

  function toggleFilter(): void {
    setFilterOpen((old) => !old);
  }

  function search(name: string): void {
    setFilterParams({ ...filterValues, name });
  }

  return (
    <DefaultLayout>
      <main className="flex w-full bg-dft-pattern grow bg-bg-pattern">
        <div className="w-full relative max-w-7xl mx-auto  flex flex-col">
          <Header>
            <Breadcrumb />
            <div className="px-16 ">
              {tilte}
              <TextInput
                type="text"
                placeholder="Buscar por..."
                onChange={handleSearch}
              />
            </div>
          </Header>
          <section className="flex h-full ">
            {disableFilters ? null : (
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
                      <h3 className="text-2xl font-bold text-center ">
                        Filtros
                      </h3>
                      {filters}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
            <div className="w-full h-full p-safe space-y-safe lg:space-y-0 bg-system-100">
              <div className="w-full relative">
                <Button full onClick={toggleFilter} className="lg:hidden">
                  Filtros
                </Button>
              </div>
              {children}
            </div>
          </section>
        </div>
      </main>
    </DefaultLayout>
  );
};
