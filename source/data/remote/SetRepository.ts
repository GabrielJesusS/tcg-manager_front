import { TEither, left, right } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";
import { ISetRepository } from "@/domain/repositories/ISetRepository";
import { HttpMethod, IHttpClient } from "@/services/http";
import { generateHttpErrorResponse } from "../modules/generateHttpErrorResponse";
import { IApiResponse } from "../modules/IApiResponse";

interface ISetList {
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
    data: ISetList[];
    page: number;
    pageSize: number;
    count: number;
    totalCount: number;
}

interface ISearchOnList{
  searchParams?: string,
  page?: number,
  pageSize?: number
}

export class SetRepository implements ISetRepository {
  private readonly client: IHttpClient;

  constructor(client: IHttpClient) {
    this.client = client;
  }

  private static readonly getRoute: string = "/sets";

  async get(params:ISearchOnList): Promise<TEither<TApplicationError, ISetResponse>> {
    try {
      const {
        body: { data },
      } = await this.client.request<IApiResponse<ISetResponse>, undefined, ISearchOnList>({
        method: HttpMethod.GET,
        url: SetRepository.getRoute,
        params
      });

      return right(data);
    } catch (error) {
      return left(generateHttpErrorResponse(error));
    }
  }
}
