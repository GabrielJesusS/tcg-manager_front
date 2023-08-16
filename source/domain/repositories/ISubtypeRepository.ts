import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";

interface ISubtypeResponse {
  data: string[];
}

export interface ISubtypeRepository {
  getList: () => Promise<TEither<TApplicationError, ISubtypeResponse>>;
}
