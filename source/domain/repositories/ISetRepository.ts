import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";

interface ISetList {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: {
    unlimited?: string;
    expanded?: string;
    standard?: string;
  };
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: {
    symbol: string;
    logo: string;
  };
}

interface ISetResponse {
  data: {
    data: ISetList;
    page: number;
    pageSize: number;
    count: number;
    totalCount: number;
  };
}

export interface ISetRepository {
  get: () => Promise<TEither<TApplicationError, ISetResponse>>;
}
