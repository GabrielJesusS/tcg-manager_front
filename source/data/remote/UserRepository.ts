import { left, right, TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";
import { IUserRepository } from "@/domain/repositories/IUserRepository";
import { HttpMethod, IHttpClient } from "@/services/http";
import { IApiResponse } from "../modules/IApiResponse";
import { IUserCreatePayload } from "./models/CreateUserPayload";
import { generateHttpErrorResponse } from "@/data/modules/generateHttpErrorResponse";
import { ICookieService } from "@/services/ICookieService";
import { IAuthUserPayload } from "./models/AuthUserPayload";

interface CreateParams {
  userName: string;
  email: string;
  password: string;
}

interface AuthParams {
  email: string;
  password: string;
}

export class UserRepository implements IUserRepository {
  private readonly client: IHttpClient;

  private readonly cookieService: ICookieService;

  //Routes
  private static readonly createRoute: string = "/user/register";
  private static readonly authRoute: string = "/user/login";

  constructor(
    client: IHttpClient,
    cookieService: ICookieService
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

  async auth(
    params: AuthParams
  ): Promise<TEither<TApplicationError, undefined>> {
    try {

      const payload = { ...params}

      const {body: {data}} = await this.client.request<IApiResponse<undefined>, IAuthUserPayload>({
        url: UserRepository.authRoute,
        method: HttpMethod.GET,
        payload
      })

      console.log(data)



      return right(undefined);
    } catch (error) {
      return left(generateHttpErrorResponse(error));
    }
  }
}
