import { TEither, left, right } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";
import { ISetRepository } from "@/domain/repositories/ISetRepository";
import { HttpMethod, IHttpClient } from "@/services/http";
import { generateHttpErrorResponse } from "../modules/generateHttpErrorResponse";
import { IApiResponse } from "../modules/IApiResponse";

interface ISet {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: {
    unlimited?: string;
    expanded?: string;
    standard?: string;
  };
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: {
    symbol: string;
    logo: string;
  };
}

interface ISetResponse {
  data: ISet[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

interface ISearchOnList {
  page?: number;
  pageSize?: number;
}

export class SetRepository implements ISetRepository {
  private readonly client: IHttpClient;

  constructor(client: IHttpClient) {
    this.client = client;
  }

  private static readonly getRoute: string = "/set";

  async getList(
    params: ISearchOnList
  ): Promise<TEither<TApplicationError, ISetResponse>> {
    try {
      const {
        body: { data },
      } = await this.client.request<
        IApiResponse<ISetResponse>,
        undefined,
        ISearchOnList
      >({
        method: HttpMethod.GET,
        url: SetRepository.getRoute,
        params,
      });

      return right(data);
    } catch (error) {
      return left(generateHttpErrorResponse(error));
    }
  }

  async get(id: string): Promise<TEither<TApplicationError, ISet>> {
    try {
      const {
        body: { data },
      } = await this.client.request<IApiResponse<{data: ISet}>>({
        method: HttpMethod.GET,
        url: `${SetRepository.getRoute}/${id}`,
      });

      return right(data.data);
    } catch (error) {
      return left(generateHttpErrorResponse(error));
    }
  }
}
