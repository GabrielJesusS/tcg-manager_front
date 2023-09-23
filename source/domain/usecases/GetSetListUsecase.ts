import { IUsecase } from "@/core/Usecase";
import { ISetRepository } from "../repositories/ISetRepository";
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
  data: ISetList[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

interface ISearchOnList {
  page?: number;
  pageSize?: number;
}

export class GetSetListUsecase implements IUsecase {
  constructor(private readonly setrepository: ISetRepository) {}

  async execute(
    params: ISearchOnList
  ): Promise<TEither<TApplicationError, ISetResponse>> {
    return await this.setrepository.getList(params);
  }
}
