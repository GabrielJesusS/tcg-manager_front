import { left, right, TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";
import { IUserRepository } from "@/domain/repositories/IUserRepository";
import { HttpMethod, IHttpClient } from "@/services/http";
import { IApiResponse } from "../modules/IApiResponse";
import { IUserCreatePayload } from "./models/CreateUserPayload";
import {generateHttpErrorResponse } from "@/data/modules/generateHttpErrorResponse"
import { ICookieService } from "@/services/ICookieService";

interface CreateParams {
  userName: string;
  email: string;
  password: string;
}

export class UserRepository implements IUserRepository {
  private readonly client: IHttpClient;

  private readonly cookieService: ICookieService;

  //Routes
  private static readonly createRoute: string = "/user/register";

  constructor(
    client: IHttpClient,
    cookieService: ICookieService //TODO:change string to ICookieService when implemented
  ) {
    this.client = client;
    this.cookieService = cookieService;
  }

  async create(
    params: CreateParams
  ): Promise<TEither<TApplicationError, undefined>> {
    try {
      const payload: IUserCreatePayload = { ...params, name: params.userName };

      await this.client.request<IApiResponse<undefined>, IUserCreatePayload>({
        method: HttpMethod.POST,
        url: UserRepository.createRoute,
        payload,
      });

      return right(undefined);
    } catch (error) {
      return left(generateHttpErrorResponse(error));
    }
  }
}
