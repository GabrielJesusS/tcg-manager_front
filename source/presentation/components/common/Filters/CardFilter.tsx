import { useRecoilState } from "recoil";
import { Dropdown } from "../Dropdown";
import {
  typeFilter,
  supertypeFilter,
} from "@/presentation/data/local/cardFiltersInfos";
import {
  ICardFilter,
  cardFilterAtom,
} from "@/presentation/store/filters/cardFiltersAtom";
import { useGetSubtypes } from "@/presentation/hooks/useGetSubtypes";
import { useMemo } from "react";

const defaultValue = {
  id: "01",
  text: "Nenhum",
  value: "",
};

export const CardFilter = (): JSX.Element => {
  const [filtersValue, setFilterParams] = useRecoilState(cardFilterAtom);
  const { data } = useGetSubtypes();

  const subtypesList = useMemo(
    () =>
      data?.data.map((e) => ({
        id: e,
        text: e,
        value: e,
      })),
    [data]
  );

  function handleChange(param: keyof ICardFilter) {
    return (e: string): void => {
      setFilterParams({ ...filtersValue, [param]: e, types: "" });
    };
  }

  return (
    <div className="space-y-4">
      <Dropdown
        label="Ordenar por"
        placeholder="Selecione o tipo"
        selectedOption={filtersValue.subtypes ?? ""}
        options={[defaultValue, ...(subtypesList ?? [])]}
        setter={handleChange("subtypes")}
      />
      <Dropdown
        label="Super tipo"
        placeholder="Selecione o tipo"
        options={supertypeFilter}
        selectedOption={filtersValue.supertype ?? ""}
        setter={handleChange("supertype")}
      />
      <Dropdown
        label="Subtipo"
        placeholder="Selecione o tipo"
        selectedOption={filtersValue.subtypes ?? ""}
        options={[defaultValue, ...(subtypesList ?? [])]}
        setter={handleChange("subtypes")}
      />
      {filtersValue.supertype !== "Pokémon" && (
        <Dropdown
          label="Tipo do pokémon"
          placeholder="Selecione o tipo"
          options={typeFilter}
          selectedOption={filtersValue.types ? filtersValue.types : ""}
          setter={(e) => {
            setFilterParams({ ...filtersValue, types: e });
          }}
        />
      )}
    </div>
  );
};
