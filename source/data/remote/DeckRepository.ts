import { TEither, left, right } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";
import { IDeckRepository } from "@/domain/repositories/IDeckRepository";
import { HttpMethod, IHttpClient, IHttpResponse } from "@/services/http";
import { generateHttpErrorResponse } from "../modules/generateHttpErrorResponse";
import { IDeckListResponse } from "./responses/DeckListResponse";
import { IApiResponse } from "../modules/IApiResponse";
import { IDeckResponse } from "./responses/DeckResponse";

interface ICreateDeckParams {
  name: string;
  description: string;
  difficulty: number;
  cards: Array<{ card_id: string }>;
  user: {
    id: string;
  };
}

interface ISearchOnListParams {
  relations?: string;
  searchParams?: string;
  page?: number;
  pageSize?: number;
  orderBy: string;
}

export class DeckRepository implements IDeckRepository {
  private readonly client: IHttpClient;

  public static createUrl: string = "/deck";
  public static list: string = "/deck";
  public static getOne: string = "/deck";

  constructor(client: IHttpClient) {
    this.client = client;
  }

  async getList(
    params: ISearchOnListParams
  ): Promise<TEither<TApplicationError, IDeckListResponse>> {
    try {
      const {
        body: { data },
      } = await this.client.request<
        IApiResponse<IDeckListResponse>,
        undefined,
        ISearchOnListParams
      >({
        method: HttpMethod.GET,
        url: DeckRepository.list,
        params: { ...params, relations: "user" },
      });

      return right(data);
    } catch (error) {
      return left(generateHttpErrorResponse(error));
    }
  }

  async getById(id): Promise<TEither<TApplicationError, IDeckResponse>> {
    try {
      const {
        body: {
          data: { data },
        },
      } = await this.client.request<
        IApiResponse<{ data: IDeckResponse[] }>,
        undefined,
        { id: number; relations?: string }
      >({
        method: HttpMethod.GET,
        url: DeckRepository.getOne,
        params: {
          id: Number(id),
          relations: "cards",
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

  async create(
    params: ICreateDeckParams
  ): Promise<TEither<TApplicationError, undefined>> {
    try {
      await this.client.request<
        IHttpResponse<undefined>,
        { deck: ICreateDeckParams }
      >({
        method: HttpMethod.POST,
        url: DeckRepository.createUrl,
        payload: { deck: params },
      });

      return right(undefined);
    } catch (error) {
      return left(generateHttpErrorResponse(error));
    }
  }
}
