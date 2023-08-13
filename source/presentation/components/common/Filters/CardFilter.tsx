import { useRecoilState } from "recoil";
import { Dropdown } from "../Dropdown";
import {
  typeFilter,
  supertypeFilter,
} from "@/presentation/data/local/cardFiltersInfos";
import { cardFilterAtom } from "@/presentation/store/filters/cardFiltersAtom";

export const CardFilter = (): JSX.Element => {
  const [filtersValue, setFilterParams] = useRecoilState(cardFilterAtom);

  return (
    <>
      <div className="relative">
        <Dropdown
          label="Super tipo"
          placeholder="Selecione o tipo"
          options={supertypeFilter}
          selectedOption={filtersValue.supertype ? filtersValue.supertype : ""}
          setter={(e) => {
            setFilterParams({ ...filtersValue, supertype: e, types: "" });
          }}
        />
      </div>
      <div className="relative">
        {/*  <Dropdown
          label="Subtipo"
          placeholder="Selecione o tipo"
          options={typeFilter}
        /> */}
      </div>
      {filtersValue.supertype === "Pokémon" && (
        <div className="relative">
          <Dropdown
            label="Tipo do pokémon"
            placeholder="Selecione o tipo"
            options={typeFilter}
            selectedOption={filtersValue.types ? filtersValue.types : ""}
            setter={(e) => {
              setFilterParams({ ...filtersValue, types: e });
            }}
          />
        </div>
      )}
    </>
  );
};
