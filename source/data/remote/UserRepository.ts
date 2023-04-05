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

interface IAuthToken {
  token: string;
}

export class UserRepository implements IUserRepository {
  private readonly client: IHttpClient;

  private readonly cookieService: ICookieService;

  //Routes
  private static readonly createRoute: string = "/user/register";
  private static readonly authRoute: string = "/user/login";
  private static readonly getPtofile: string = "/user/getProfile";

  constructor(client: IHttpClient, cookieService: ICookieService) {
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
      const payload = { ...params };

      const { body } = await this.client.request<
        IApiResponse<IAuthToken>,
        IAuthUserPayload
      >({
        method: HttpMethod.POST,
        url: UserRepository.authRoute,
        payload: payload,
      });
      //TODO:change data response to a response pattern

      this.cookieService.setCookie(
        process.env.NEXT_PUBLIC_COOKIE_NAME as string,
        body.data.token
      );

      return right(undefined);
    } catch (error) {
      return left(generateHttpErrorResponse(error));
    }
  }

  async getProfile(): Promise<TEither<TApplicationError, IGetProfileResponse>> {
    try {
      const { body } = await this.client.request<
        IApiResponse<IGetProfileResponse>
      >({
        method: HttpMethod.GET,
        url: UserRepository.getPtofile,
      });

      return right(body.data);
    } catch (error) {
      return left(generateHttpErrorResponse(error));
    }
  }
}
