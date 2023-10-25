import { TEither, left, right } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";
import { IArticleRepository } from "@/domain/repositories/IArticleRepository";
import { HttpMethod, IHttpClient } from "@/services/http";
import { IApiResponse } from "../modules/IApiResponse";
import { generateHttpErrorResponse } from "../modules/generateHttpErrorResponse";
import { IArticleListResponse } from "./responses/ArticleListResponse";
import { IArticleResponse } from "./responses/ArticleResponse";

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

interface ISearchOnListParams {
  relations?: string;
  searchParams?: string;
  page?: number;
  pageSize?: number;
  orderBy: string;
}

interface IArticleCreatePayload {
  article: IArticleCreateParams;
}

export class ArticleRepository implements IArticleRepository {
  private readonly client: IHttpClient;

  private static readonly createRoute: string = "/article/";
  private static readonly getOne: string = "/article/";
  private static readonly list: string = "/article/";

  constructor(client: IHttpClient) {
    this.client = client;
  }

  async create(
    params: IArticleCreateParams
  ): Promise<TEither<TApplicationError, void>> {
    try {
      const {
        body: { data },
      } = await this.client.request<
        IApiResponse<undefined>,
        IArticleCreatePayload
      >({
        method: HttpMethod.POST,
        url: ArticleRepository.createRoute,
        payload: { article: params },
      });

      return right(data);
    } catch (error) {
      return left(generateHttpErrorResponse(error));
    }
  }

  async getList(
    params: ISearchOnListParams
  ): Promise<TEither<TApplicationError, IArticleListResponse>> {
    try {
      const {
        body: { data },
      } = await this.client.request<
        IApiResponse<IArticleListResponse>,
        undefined,
        ISearchOnListParams
      >({
        method: HttpMethod.GET,
        url: ArticleRepository.list,
        params: { ...params, relations: "user" },
      });

      return right(data);
    } catch (error) {
      return left(generateHttpErrorResponse(error));
    }
  }

  async getById(id): Promise<TEither<TApplicationError, IArticleResponse>> {
    try {
      const {
        body: {
          data: { data },
        },
      } = await this.client.request<
        IApiResponse<{ data: IArticleResponse[] }>,
        undefined,
        { id: number; relations?: string }
      >({
        method: HttpMethod.GET,
        url: ArticleRepository.getOne,
        params: {
          id: Number(id),
          relations: "user" ,
        },
      });

      if (!data.length) {
        throw new Error("Deck not found");
      }

      return right(data[0]);
    } catch (error) {
      return left(generateHttpErrorResponse(error));
    }
  }
}
