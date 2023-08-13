import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";

interface IArticleCreateParams {
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

export interface IArticleRepository {
  create: (
    params: IArticleCreateParams
  ) => Promise<TEither<TApplicationError, void>>;
}
