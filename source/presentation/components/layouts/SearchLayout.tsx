import { ChangeEvent, useState } from "react";
import { Breadcrumb } from "../common/Breadcrumb";
import { Dropdown } from "../common/Dropdown";
import { Header } from "../common/Header";
import { Textinput } from "../common/Textinput";
import { DefaultLayout } from "./DefaultLayout";
import DefaultPatternBG from "@/presentation/public/images/rsc/bgs/pettern-bg.png";
import { useDebounce } from "@/presentation/hooks/useDebounce";
import { useRecoilState } from "recoil";
import { filterSearchAtom } from "@/presentation/store/genericAtoms";

interface ISearchLayout {
  children: React.ReactNode;
}

export const SearchLayout = ({ children }: ISearchLayout) => {
  const debounce = useDebounce(search, 1000);

  const [filterParams, setFilterParams] = useRecoilState(filterSearchAtom);

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    debounce(event.target.value);
  }

  function search(name: string) {
    setFilterParams({ name });
  }

  return (
    <DefaultLayout>
      <main className="flex w-full bg-dft-pattern relative min-h-screen">
        <div className="absolute h-full w-full bg-red-400">
          <img src={DefaultPatternBG.src} alt="" />
        </div>
        <div className="w-full max-w-7xl mx-auto relative flex flex-col">
          <Header>
            <div className="px-8 md:px-16">
              Cartas
              <Textinput
                type="text"
                placeholder="Buscar por..."
                inputProps={{ onChange: handleSearch }}
              />
            </div>
          </Header>
          <section className="flex h-full relative">
            <div className="w-full max-w-xs bg-system p-4">
              <div className="sticky left-0 top-20 ">
                <h3 className="text-2xl font-bold text-center ">Filtros</h3>
                <div>
                  <Dropdown
                    options={[{ text: "opt-1", value: "opt-2" }]}
                    label="Tipo"
                    selectPlaceholder="Selecione um tipo"
                  />
                  <Dropdown
                    options={[{ text: "opt-1", value: "opt-2" }]}
                    label="Supertipo"
                    selectPlaceholder="Selecione um supertipo"
                  />
                  <Dropdown
                    options={[{ text: "opt-1", value: "opt-2" }]}
                    label="Subtipo"
                    selectPlaceholder="Selecione um subtipo"
                  />
                </div>
              </div>
            </div>
            <div className="w-full bg-system-100 h-full p-safe space-y-safe">
              <div>
                <Breadcrumb />
              </div>
              {children}
            </div>
          </section>
        </div>
      </main>
    </DefaultLayout>
  );
};
