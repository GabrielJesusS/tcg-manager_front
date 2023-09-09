interface ICardDeckInfo {
  id: number;
  card_id: string;
  cardInfo: {
    id: string;
    name: string;
    images: {
      small: string;
      large: string;
    };
  };
}

export interface IDeckResponse {
  id: string;
  name: string;
  description: string;
  difficulty: number;
  cards: ICardDeckInfo[];
}
