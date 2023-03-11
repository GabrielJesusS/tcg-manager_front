import { TApplicationError } from "@/core/Errors";
import { TEither } from "@/core/Either";

export interface IUserRepository {
  create: (params: string) => Promise<TEither<TApplicationError, undefined>>
}
