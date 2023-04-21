import { useRecoilState, useSetRecoilState } from "recoil";
import { Dropdown } from "../Dropdown";
import {
  typeFilter,
  supertypeFilter,
} from "@/presentation/data/local/cardFiltersInfos";
import { cardFilterAtom } from "@/presentation/store/filters/cardFiltersAtom";

export const CardFilter = () => {
  const [filtersValue, setFilterParams] = useRecoilState(cardFilterAtom);

  return (
    <>
      <Dropdown
        label="Super tipo"
        placeholder="Selecione o tipo"
        options={supertypeFilter}
        selectedOption={filtersValue.supertype? filtersValue.supertype : ''}
        setter={(e) => setFilterParams({ ...filtersValue, supertype: e , types: ''})}
      />
      <Dropdown
        label="Subtipo"
        placeholder="Selecione o tipo"
        options={typeFilter}
      />
      {filtersValue.supertype === "Pokémon" && (
        <Dropdown
          label="Tipo do pokémon"
          placeholder="Selecione o tipo"
          options={typeFilter}
          selectedOption={filtersValue.types? filtersValue.types : ""}
          setter={(e) => setFilterParams({ ...filtersValue, types: e })}
        />
      )}
    </>
  );
};
