import { left, right, TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";
import {
  ICardParams,
  ICardRepository,
} from "@/domain/repositories/ICardRepository";
import { HttpMethod, IHttpClient } from "@/services/http";
import { generateHttpErrorResponse } from "../modules/generateHttpErrorResponse";
import { IApiResponse } from "../modules/IApiResponse";
import { CardListResponse } from "./responses/CardListResponse";
import { CardResponse } from "./responses/CardResponse";

export class CardRepository implements ICardRepository {
  private readonly client: IHttpClient;

  //    routes
  private static readonly getListRoute: string = "/cards";
  private static readonly getRoute: string = "/cards";

  constructor(client: IHttpClient) {
    this.client = client;
  }

  async getList(): Promise<TEither<TApplicationError, CardListResponse[]>> {
    try {
      const {
        body: { data },
      } = await this.client.request<
        IApiResponse<CardListResponse[]>,
        undefined
      >({
        method: HttpMethod.GET,
        url: CardRepository.getListRoute,
      });

      return right(data);
    } catch (error) {
      return left(generateHttpErrorResponse(error));
    }
  }

  async get(cardId: string): Promise<TEither<TApplicationError, CardResponse>> {
    try {
      const {
        body: { data },
      } = await this.client.request<
        IApiResponse<CardResponse>,
        undefined,
        string
      >({
        url: CardRepository.getRoute,
        method: HttpMethod.GET,
        params: cardId,
      });

      return right(data);
    } catch (error) {
      return left(generateHttpErrorResponse(error));
    }
  }
}
