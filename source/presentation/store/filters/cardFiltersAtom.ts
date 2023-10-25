import { OrderByEnum } from "@/presentation/enums/OrderByEnum";
import { atom, atomFamily } from "recoil";

export interface ICardFilter {
  name: string;
  types: string;
  supertype: string;
  subtypes: string;
}

export const filterParamsAtom = atomFamily<ICardFilter, string>({
  key: "FilterParamsAtom",
  default: {
    name: "",
    types: "",
    subtypes: "",
    supertype: "",
  },
});

export const cardFilterOrderAtom = atom<OrderByEnum>({
  key: "CardFilterOrderAtom",
  default: OrderByEnum.NUMBER,
});
