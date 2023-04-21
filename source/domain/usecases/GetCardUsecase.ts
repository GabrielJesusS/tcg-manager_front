import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";
import { IUsecase } from "@/core/Usecase";
import { CardRepository } from "@/data/remote/CardRepository";


interface ICardParamsReturn{
  data: ICardParams
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
      unlimited?: string;
      expanded?: string;
      standard?: string;
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
    standard?: string;
  };
  images: {
    small: string;
    large: string;
  };
  resistances: {
    type: string;
    value: string;
  }[];
  retreatCost: string[];
  abilities: {
    name: string;
    text: string;
    type: string;
  }[];
}

export class GetCardUsecase implements IUsecase {
  constructor(private readonly cardRepository: CardRepository) {}

  execute(params: string): Promise<TEither<TApplicationError, ICardParamsReturn>> {
    return this.cardRepository.get(params);
  }
}
