import { TFactory } from "@/core/Factory";
import { SubtypeRepository } from "@/data/remote/SubtypeRepository";
import { GetSubtypesUseCase } from "@/domain/usecases/GetSubtypesListUseCase";
import { HttpClientAxios } from "@/infra/HttpClientAxios";

export const createGetSubtypesListUsecase: TFactory<GetSubtypesUseCase> =
  () => {
    const httpClient = new HttpClientAxios();
    const repository = new SubtypeRepository(httpClient);

    return new GetSubtypesUseCase(repository);
  };
