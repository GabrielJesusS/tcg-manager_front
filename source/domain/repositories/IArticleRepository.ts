import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";

interface IArticleCreateParams {
  title: string;
  description: string;
  content: string;
  user: {
    id: number | string;
  };
  uploadImages: Array<{
    identifier?: string;
    string64: string;
    originalName: string;
  }>;
}

interface ISearchOnList {
  searchParams?: string;
  page?: number;
  pageSize?: number;
  orderBy?: string;
}

interface IArticle {
  id: number;
  content: string;
  created_at: string;
  title: string;
  description: string;
}

interface IArticleListProps {
  data: IArticle[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

export interface IArticleRepository {
  create: (
    params: IArticleCreateParams
  ) => Promise<TEither<TApplicationError, void>>;
  getList: (
    params: ISearchOnList
  ) => Promise<TEither<TApplicationError, IArticleListProps>>;
  getById: (id: string) => Promise<TEither<TApplicationError, IArticle>>;
}
