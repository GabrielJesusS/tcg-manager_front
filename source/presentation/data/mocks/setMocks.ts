interface SetitemParams {
  setId: string;
  setTitle: string;
  releaseDate: string;
  legalities?: ILegalitiesParams;
  setImage: string;
  setIcon: string;
}

interface ILegalitiesParams {
  unlimited?: string;
  standard?: string;
  expanded?: string;
}

export const Setitems: Array<SetitemParams> = [
  {
    setId: "swsh1",
    setTitle: "Sword & Shield",
    legalities: {
      unlimited: "Legal",
      standard: "Legal",
      expanded: "Legal",
    },
    releaseDate: "2020/02/07",
    setIcon: "https://images.pokemontcg.io/swsh1/symbol.png",
    setImage: "https://images.pokemontcg.io/swsh1/logo.png",
  },
];
