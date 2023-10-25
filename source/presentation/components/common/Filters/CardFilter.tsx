import { useRecoilState } from "recoil";
import { Dropdown } from "../Dropdown";
import {
  typeFilter,
  supertypeFilter,
  orderByOptions,
} from "@/presentation/data/local/cardFiltersInfos";
import {
  ICardFilter,
  filterParamsAtom,
  cardFilterOrderAtom,
} from "@/presentation/store/filters/cardFiltersAtom";
import { useGetSubtypes } from "@/presentation/hooks/useGetSubtypes";
import { useMemo } from "react";
import { OrderByEnum } from "@/presentation/enums/OrderByEnum";

const defaultValue = {
  id: "01",
  text: "Nenhum",
  value: "",
};

export const CardFilter = (): JSX.Element => {
  const [filtersValue, setFilterParams] = useRecoilState(filterParamsAtom("cardList"));
  const [order, setOrder] = useRecoilState(cardFilterOrderAtom);

  const { data } = useGetSubtypes();

  const subtypesList = useMemo(
    () =>
      data
        ? data.data.map((e) => ({
            id: e,
            text: e,
            value: e,
          }))
        : [],
    [data]
  );

  function handleOrderChange(e: OrderByEnum): void {
    setOrder(e);
  }

  function handleChange(param: keyof ICardFilter) {
    return (e: string): void => {
      setFilterParams({ ...filtersValue, [param]: e, types: "" });
    };
  }

  return (
    <div className="space-y-4">
      <Dropdown
        label="Ordenar por "
        placeholder="Selecione o tipo"
        options={[defaultValue, ...orderByOptions]}
        selectedOption={order}
        setter={handleOrderChange}
      />
      <Dropdown
        label="Super tipo"
        placeholder="Selecione o tipo"
        selectedOption={filtersValue.supertype}
        options={[defaultValue, ...supertypeFilter]}
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
