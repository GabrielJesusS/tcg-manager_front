import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";

interface ICardListParams {
  id: string;
  name: string;
  images: {
    small: string;
    large: string;
  };
}

export interface ICardParams {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: string[];
  evolvesTo?: string[];
  attacks: {
    name: string;
    cost: string[];
    convertedEnergyCost: number;
    damage: string;
    text: string;
  }[];
  weaknesses: {
    type: string;
    value: string;
  }[];
  convertedRetreatCost: number;
  set: {
    id: string;
    name: string;
    series: string;
    printedTotal: number;
    total: number;
    legalities: {
        unlimited?: string,
        expanded?: string
        standard?:string
    };
    ptcgoCode: string;
    releaseDate: string;
    updatedAt: string;
    images: {
      symbol: string;
      logo: string;
    };
  };
  number: string;
  artist: string;
  rarity: string;
  legalities: {
    unlimited?: string;
    expanded?: string;
    standard?:string
  };
  images: {
    small: string;
    large: string;
  };
}

interface IRandomCardResponse{
  id: string
}

export interface ICardRepository {
  getList: () => Promise<TEither<TApplicationError, ICardListParams[]>>;
  get: (cardId:string) => Promise<TEither<TApplicationError, ICardParams>>;
  getRandom: ()=> Promise<TEither<TApplicationError, IRandomCardResponse>>
}
