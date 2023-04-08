import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";

interface ICardListProps {
  data: ICardItem[]
  page: number
  pageSize: number;
  count: number;
  totalCount: number;
}

interface ICardItem{
  id: string;
  name: string;
  subtypes: string[];
  supertype: string;
  images: {
    small: string;
    large: string;
  };
}


interface ICardRandomProps  {
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

interface ISearchOnList{
  searchParams?: string,
  page?: number,
  pageSize?: number
}

export interface ICardRepository {
  getList:(params:ISearchOnList) => Promise<TEither<TApplicationError, ICardListProps>>;
  get: (cardId:string) => Promise<TEither<TApplicationError, ICardParams>>;
  getRandom: ()=> Promise<TEither<TApplicationError, ICardRandomProps>>
}
