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

interface ISearchOnList {
  searchParams?: string;
  page?: number;
  pageSize?: number;
  orderBy?: string;
}

interface IDeckItem {
  id: string;
  name: string;
  description: string;
  difficulty: number;
  user: {
    id: string;
    user_name: string;
  };
}

interface IDeckListProps {
  data: IDeckItem[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

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

interface IDeck {
  id: string;
  name: string;
  description: string;
  difficulty: number;
  cards: ICardDeckInfo[];
}

export interface IDeckRepository {
  create: (
    params: ICreateDeckParams
  ) => Promise<TEither<TApplicationError, undefined>>;
  getList: (
    params: ISearchOnList
  ) => Promise<TEither<TApplicationError, IDeckListProps>>;
  getById: (id: string) => Promise<TEither<TApplicationError, IDeck>>;
}
