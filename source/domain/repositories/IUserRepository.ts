import { TApplicationError } from "@/core/Errors";
import { TEither } from "@/core/Either";

interface IUserCreateParams {
  user_name: string;
  name: string;
  email: string;
  password: string;
}

interface IUserAuthParams {
  email: string;
  password: string;
}

interface IUserUpdateParams {
  id: string;
  user_name: string;
  name: string;
  email: string;
}

interface IUserData {
  id: number | string;
  user_name: string;
  name: string;
  email: string;
  experience_level: number;
}

interface IUserProfileImageParams {
  string64: string;
  originalName: string;
  user: {
    id: string;
  };
}

interface IUserProfileImageResponse {
  url: string;
}

export interface IUserRepository {
  create: (
    params: IUserCreateParams
  ) => Promise<TEither<TApplicationError, undefined>>;
  auth: (
    params: IUserAuthParams
  ) => Promise<TEither<TApplicationError, undefined>>;
  getProfile: () => Promise<TEither<TApplicationError, IUserData>>;
  getById: (id: string) => Promise<TEither<TApplicationError, IUserData>>;
  signOut: () => Promise<TEither<TApplicationError, undefined>>;
  update: (
    params: Partial<IUserUpdateParams>
  ) => Promise<TEither<TApplicationError, undefined>>;
  uploadProfileImage: (
    params: IUserProfileImageParams
  ) => Promise<TEither<TApplicationError, IUserProfileImageResponse>>;
}
