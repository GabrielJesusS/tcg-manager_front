import { TEither, left, right } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";
import { IArticleRepository } from "@/domain/repositories/IArticleRepository";
import { HttpMethod, IHttpClient } from "@/services/http";
import { IApiResponse } from "../modules/IApiResponse";
import { generateHttpErrorResponse } from "../modules/generateHttpErrorResponse";

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

interface IArticleCreatePayload {
  article: IArticleCreateParams;
}

export class ArticleRepository implements IArticleRepository {
  private readonly client: IHttpClient;

  private static readonly createRoute: string = "/article/";

  constructor(client: IHttpClient) {
    this.client = client;
  }

  async create(
    params: IArticleCreateParams
  ): Promise<TEither<TApplicationError, void>> {
    console.log(params);
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
}
