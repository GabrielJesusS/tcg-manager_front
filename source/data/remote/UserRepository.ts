import { left, right, TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";
import { IUserRepository } from "@/domain/repositories/IUserRepository";
import { IHttpClient } from "@/services/http";

interface CreateParams {
  userName: string;
  email: string;
  password: string;
}

export class UserRepository implements IUserRepository {


    private readonly client: IHttpClient;

    private readonly cookieService: string; //TODO:change string to ICookieService when implemented


    constructor(
        client: IHttpClient,
        cookieService: string //TODO:change string to ICookieService when implemented
    ){
        this.client = client;
        this.cookieService = cookieService;
    }



  async create(params: CreateParams):Promise<TEither<TApplicationError, undefined>>{

    try {
        
        const payload: CreateParams  = {...params}

      /*   await this.client.request<IApiResponse<undefined>, CreateParams>({

        })
 */

        return right(undefined)
    } catch (error) {
        return left(error)
    }



  }
}
