export interface CardResponse {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: string[];
  evolvesTo?: string[];
  attacks: Array<{
    name: string;
    cost: string[];
    convertedEnergyCost: number;
    damage: string;
    text: string;
  }>;
  weaknesses: Array<{
    type: string;
    value: string;
  }>;
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
  resistances: Array<{
    type: string;
    value: string;
  }>;
  rules?: string[];
  retreatCost: string[];
  abilities: Array<{
    name: string;
    text: string;
    type: string;
  }>;
}
