import { TEither, left, right } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";
import { IDeckRepository } from "@/domain/repositories/IDeckRepository";
import { HttpMethod, IHttpClient, IHttpResponse } from "@/services/http";
import { generateHttpErrorResponse } from "../modules/generateHttpErrorResponse";

interface ICreateDeckParams {
  name: string;
  description: string;
  difficulty: number;
  cards: Array<{ card_id: string }>;
  user: {
    id: string;
  };
}

export class DeckRepository implements IDeckRepository {
  private readonly client: IHttpClient;

  public static createUrl: string = "/deck";

  constructor(client: IHttpClient) {
    this.client = client;
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
