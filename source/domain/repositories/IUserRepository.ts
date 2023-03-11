import { TApplicationError } from "@/core/Errors";
import { TEither } from "@/core/Either";

interface IUserCreateParams{
    userName: string;
    email: string;
    password: string;
}



export interface IUserRepository {
  create: (params: IUserCreateParams) => Promise<TEither<TApplicationError, undefined>>
}
