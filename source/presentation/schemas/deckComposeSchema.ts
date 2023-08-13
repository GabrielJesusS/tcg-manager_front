import { array, number, object, string } from "yup";

export const deckComposeSchema = object({
  deckName: string().required().max(250),
  deckCardQuantity: number()
    .test(
      "CheckDeckQuantity",
      "Um deck deve conter 60 cartas.",
      (num) => num === 3
    )
    .required(),
  deckDescription: string().required().max(250),
  deckCover: string().required(),
  deckDiff: number().required(),
  deckCards: array()
    .of(
      object().shape({
        cardId: string(),
        name: string(),
        quantity: number(),
        subtypes: array().of(string()),
        supertype: string(),
      })
    )
    .test(
      "CheckHasOneBasic",
      "O deck deve possuir no mínimo um pokémon básico",
      (deck) => {
        if (!deck) {
          return false;
        }

        if (
          deck.find(
            (card) =>
              card.supertype === "Pokémon" &&
              card.subtypes?.find((type) => type === "Basic")
          )
        ) {
          return true;
        }

        return false;
      }
    )
    .test(
      "CheckHasMinimalEnergy",
      "O deck deve possuir no mínimo dez energias básicas",
      (deck) => {
        if (!deck) {
          return false;
        }

        const count = deck.reduce((acc, card) => {
          if (
            card.supertype === "Energy" &&
            card.subtypes?.find((type) => type === "Basic")
          ) {
            return acc + 1;
          }
          return acc;
        }, 0);

        if (count >= 10) {
          return true;
        }

        return false;
      }
    ),
});
