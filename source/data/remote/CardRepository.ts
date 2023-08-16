import { left, right, TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";
import { ICardRepository } from "@/domain/repositories/ICardRepository";
import { HttpMethod, IHttpClient } from "@/services/http";
import { generateHttpErrorResponse } from "../modules/generateHttpErrorResponse";
import { IApiResponse } from "../modules/IApiResponse";
import { ICardListResponse } from "./responses/CardListResponse";
import { CardResponse } from "./responses/CardResponse";
import { IRandomCardResponse } from "./responses/RandomCardResponse";

interface ISearchOnListParams {
  searchParams?: string;
  page?: number;
  pageSize?: number;
  orderBy: string;
}

interface ICardResp {
  data: CardResponse;
}

export class CardRepository implements ICardRepository {
  private readonly client: IHttpClient;

  //    routes
  private static readonly getRandomRoute: string = "/card/randomCard";
  private static readonly getListRoute: string = "/card";
  private static readonly getRoute: string = "/card/";

  constructor(client: IHttpClient) {
    this.client = client;
  }

  async getList(
    params: ISearchOnListParams
  ): Promise<TEither<TApplicationError, ICardListResponse>> {
    try {
      const {
        body: { data },
      } = await this.client.request<
        IApiResponse<ICardListResponse>,
        undefined,
        ISearchOnListParams
      >({
        method: HttpMethod.GET,
        url: CardRepository.getListRoute,
        params,
      });

      return right(data);
    } catch (error) {
      return left(generateHttpErrorResponse(error));
    }
  }

  async get(cardId: string): Promise<TEither<TApplicationError, ICardResp>> {
    try {
      const {
        body: { data },
      } = await this.client.request<IApiResponse<ICardResp>, undefined, string>(
        {
          url: CardRepository.getRoute + cardId,
          method: HttpMethod.GET,
        }
      );

      return right(data);
    } catch (error) {
      return left(generateHttpErrorResponse(error));
    }
  }

  async getRandom(): Promise<TEither<TApplicationError, IRandomCardResponse>> {
    try {
      const { body } = await this.client.request<
        IApiResponse<IRandomCardResponse>,
        undefined
      >({
        method: HttpMethod.GET,
        url: CardRepository.getRandomRoute,
      });

      return right(body.data);
    } catch (error) {
      return left(generateHttpErrorResponse(error));
    }
  }
}
