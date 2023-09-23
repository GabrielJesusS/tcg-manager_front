import { IUsecase } from "@/core/Usecase";
import { ISetRepository } from "../repositories/ISetRepository";
import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";

interface ISet {
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

export class GetSetUsecase implements IUsecase {
  constructor(private readonly repository: ISetRepository) {}

  async execute(id: string): Promise<TEither<TApplicationError, ISet>> {
    return await this.repository.get(id);
  }
}
