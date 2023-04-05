import { TApplicationError } from "@/core/Errors";
import { TEither } from "@/core/Either";

interface IUserCreateParams {
  userName: string;
  email: string;
  password: string;
}

interface IUserAuthParams {
  email: string;
  password: string;
}

interface IUserData {
  id: number | string;
  user_name: string;
  name: string;
  email: string;
  experience_level: number;
}

export interface IUserRepository {
  create: (
    params: IUserCreateParams
  ) => Promise<TEither<TApplicationError, undefined>>;
  auth: (
    params: IUserAuthParams
  ) => Promise<TEither<TApplicationError, undefined>>;
  getProfile: () => Promise<TEither<TApplicationError, IUserData>>;
}
