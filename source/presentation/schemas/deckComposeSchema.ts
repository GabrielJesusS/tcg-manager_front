import { array, number, object, string } from "yup";

export const deckComposeSchema = object({
  deckName: string().required().max(250),
  deckDescription: string().required().max(250),
  deckCover: string().required(),
  deckDiff: number().required(),
  deckCards: array().of(
    object({
      cardId: string(),
      quantity: number(),
    })
  ),
});
