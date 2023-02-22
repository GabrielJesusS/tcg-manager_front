interface DeckitemParams {
  deckId: string;
  deckTitle: string;
  deckAuthor: {
    authorName: string;
    authorId: string;
  };
  deckRate: number;
  deckDifficulty: number;
  deckDescription: string;
}

export const Deckitems: Array<DeckitemParams> = [
  {
    deckId: "1",
    deckTitle: "Test Deck",
    deckAuthor: {
      authorName: "Test Author",
      authorId: "1",
    },
    deckRate: 3.94826392,
    deckDifficulty: 4.82733272,
    deckDescription: "Test Description",
  },
];
