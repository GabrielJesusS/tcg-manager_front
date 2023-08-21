import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";

interface ICreateDeckParams {
  name: string;
  description: string;
  difficulty: number;
  cards: Array<{ card_id: string }>;
  user: {
    id: string;
  };
}

export interface IDeckRepository {
  create: (
    params: ICreateDeckParams
  ) => Promise<TEither<TApplicationError, undefined>>;
}
