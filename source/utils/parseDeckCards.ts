interface IDeckCardReturn {
  id: string;
  name: string;
  image: string;
  quantity: number;
}

interface IDeckCard {
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

export function parseDeckCards(deckCards: IDeckCard[]): IDeckCardReturn[] {
  return deckCards.reduce<IDeckCardReturn[]>((acc, card) => {
    const cardIndex = acc.findIndex((e) => e.id === card.card_id);

    if (cardIndex === -1) {
      return [
        ...acc,
        {
          id: card.card_id,
          name: card.cardInfo.name,
          image: card.cardInfo.images.small,
          quantity: 1,
        },
      ];
    }

    return acc.map((e) =>
      e.id !== card.card_id ? e : { ...e, quantity: e.quantity + 1 }
    );
  }, []);
}
