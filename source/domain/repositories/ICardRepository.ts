import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";


interface ICardListParams{
    id: string;
    name: string;
    images: {
        small: string;
        large: string;
    }
}


export interface ICardRepository {
  getList: () => Promise<TEither<TApplicationError, ICardListParams[]>>;
}
