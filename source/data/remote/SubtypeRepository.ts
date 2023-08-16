import { TEither, left, right } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";
import { ISubtypeRepository } from "@/domain/repositories/ISubtypeRepository";
import { HttpMethod, IHttpClient } from "@/services/http";
import { ISubtypesResponse } from "./responses/SubtypesResponse";
import { generateHttpErrorResponse } from "../modules/generateHttpErrorResponse";

export class SubtypeRepository implements ISubtypeRepository {
  private readonly client: IHttpClient;

  public static getListRoute: string = "/sub-type";

  constructor(client: IHttpClient) {
    this.client = client;
  }

  async getList(): Promise<TEither<TApplicationError, ISubtypesResponse>> {
    try {
      const { body } = await this.client.request<ISubtypesResponse>({
        method: HttpMethod.GET,
        url: SubtypeRepository.getListRoute,
      });

      return right(body);
    } catch (error) {
      return left(generateHttpErrorResponse(error));
    }
  }
}
