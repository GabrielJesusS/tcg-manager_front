import { OrderByEnum } from "@/presentation/enums/OrderByEnum";
import { SuperTypeEnum } from "@/presentation/enums/SuperTypeEnum";

export const typeFilter = [
  {
    id: "00",
    text: "Nenhum",
    value: "",
  },
  {
    id: "01",
    text: "Colorless",
    value: "Colorless",
  },
  {
    id: "02",
    text: "Darkness",
    value: "Darkness",
  },
  {
    id: "03",
    text: "Dragon",
    value: "Dragon",
  },
  {
    id: "04",
    text: "Fairy",
    value: "Fairy",
  },
  {
    id: "05",
    text: "Fighting",
    value: "Fighting",
  },
  {
    id: "06",
    text: "Fire",
    value: "Fire",
  },
  {
    id: "07",
    text: "Grass",
    value: "Grass",
  },
  {
    id: "08",
    text: "Lightning",
    value: "Lightning",
  },
  {
    id: "09",
    text: "Metal",
    value: "Metal",
  },
  {
    id: "10",
    text: "Psychic",
    value: "Psychic",
  },
  {
    id: "11",
    text: "Water",
    value: "water",
  },
];

const SuperTypeLabelMap = {
  [SuperTypeEnum.ENERGY]: "Energia",
  [SuperTypeEnum.POKEMON]: "Pokémon",
  [SuperTypeEnum.TRAINER]: "Treinador",
};

const OrderByLabelMap = {
  [OrderByEnum.NAME]: "Nome",
  [OrderByEnum.NUMBER]: "Número",
  [OrderByEnum.SET]: "Set",
};

export const orderByOptions = Object.values(OrderByEnum).map((e) => ({
  id: e,
  text: OrderByLabelMap[e],
  value: e,
}));

export const supertypeFilter = Object.values(SuperTypeEnum).map((e) => ({
  id: e,
  text: SuperTypeLabelMap[e],
  value: e,
}));
