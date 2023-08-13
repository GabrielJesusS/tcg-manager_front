import { left, right, TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";
import { IUserRepository } from "@/domain/repositories/IUserRepository";
import { HttpMethod, IHttpClient } from "@/services/http";
import { IApiResponse } from "../modules/IApiResponse";
import { IUserCreatePayload } from "./models/CreateUserPayload";
import { generateHttpErrorResponse } from "@/data/modules/generateHttpErrorResponse";
import { ICookieService } from "@/services/ICookieService";
import { IAuthUserPayload } from "./models/AuthUserPayload";
import { IGetProfileResponse } from "./responses/GetProfileResponse";

interface CreateParams {
  name: string;
  email: string;
  password: string;
  user_name: string;
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

  private static readonly createRoute: string = "/user/register";
  private static readonly authRoute: string = "/user/login";
  private static readonly getPtofile: string = "/user/verifyUserToken";

  constructor(client: IHttpClient, cookieService: ICookieService) {
    this.client = client;
    this.cookieService = cookieService;
  }

  async create(
    params: CreateParams
  ): Promise<TEither<TApplicationError, undefined>> {
    try {
      const payload: IUserCreatePayload = { ...params };

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
        payload,
      });

      this.cookieService.setCookie(
        process.env.NEXT_PUBLIC_COOKIE_NAME as string,
        body.data
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

  async signOut(): Promise<TEither<TApplicationError, undefined>> {
    try {
      this.cookieService.removeCookie(
        process.env.NEXT_PUBLIC_COOKIE_NAME as string
      );

      return right(undefined);
    } catch (error) {
      return left(generateHttpErrorResponse(error));
    }
  }
}
